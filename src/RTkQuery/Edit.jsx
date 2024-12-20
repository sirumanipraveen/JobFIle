import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useUsersQuery, useEditDetailsMutation } from "./FetchDataWithRtk";

function EditDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: usersData } = useUsersQuery();
  const [editDetails] = useEditDetailsMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { firstname: "", lastname: "", contact: "", email: "" },
  });

  useEffect(() => {
    const user = usersData?.find((user) => user.id === id);
    if (user) {
      reset({
        firstname: user.firstname,
        lastname: user.lastname,
        contact: user.contact,
        email: user.email,
      });
    }
  }, [usersData, id, reset]);

  const onSubmit = async (data) => {
    await editDetails({ id, ...data });
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form
        className="border p-4 rounded shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h4 text-primary mb-4 text-center">Update Details</h1>
        <div className="mb-3">
          <Controller
            name="firstname"
            control={control}
            defaultValue=""
            rules={{
              required: "firstname is required",
              maxLength: { value: 20, message: "maxmum length is 20" },
            }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                ref={ref}
                value={value}
                type="text"
                className="form-control"
                placeholder="Enter your firstname"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          />
          {errors.firstname && (
            <p className="text-danger">{errors.firstname.message}</p>
          )}
        </div>

        <div className="mb-3">
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            rules={{
              required: "lastname is required",
              minLength: { value: 2, message: "please enter lastname" },
            }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                ref={ref}
                type="text"
                value={value}
                className="form-control"
                placeholder="Enter the lastname"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          />
          {errors.lastname && (
            <p className="text-danger">{errors.lastname.message}</p>
          )}
        </div>
        <div className="mb-3">
          <Controller
            name="contact"
            control={control}
            defaultValue=""
            rules={{
              required: "contact is required",
              minLength: { value: 10, message: "please min 10 digits" },
              maxLength: { value: 10, message: "please enter max 10 digits" },
            }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                type="number"
                value={value}
                className="form-control"
                placeholder="Enter Phone Number"
                ref={ref}
                onChange={(e) => onChange(e)}
              />
            )}
          />

          {errors.contact && (
            <p className="text-danger">{errors.contact.message}</p>
          )}
        </div>
        <div className="mb-3">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "email is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                ref={ref}
                value={value}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => {
                  console.log(e.target.value), onChange(e);
                }}
              />
            )}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-info text-white w-100">
          Update Details
        </button>
      </form>
    </div>
  );
}

export default EditDetails;
