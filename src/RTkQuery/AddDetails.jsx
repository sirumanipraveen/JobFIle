//* eslint-disable react/no-unknown-property */

import { useForm, Controller } from "react-hook-form";
import { useAdddetailsMutation } from "./FetchDataWithRtk";
import { useNavigate } from "react-router-dom";

function AddDetails() {
  const {
    // setValue,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addDetails] = useAdddetailsMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("onsubmitdata", data);
    await addDetails(data);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form
        className="border p-4 rounded shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h4 text-primary mb-4 text-center">Add Details</h1>
        <div className="mb-3">
          <Controller
            name="firstname"
            ref={register("firstname")}
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
            <p className="text-danger"> {errors.firstname.message} </p>
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
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default AddDetails;
