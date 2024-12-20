import { useFieldArray, useForm, Controller } from "react-hook-form";
import "./JobSummaryPart1DynamicForm.css";
import { useState } from "react";

function DynamicForm() {
  const [datas, setData] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      tasks: [{ location: "", Radius: "", Distance: "", Vacancies: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit = (data) => {
    setData([...datas, data]);
  };

  const handleAddButton = () => {
    const values = getValues("tasks");
    const isAllFieldsFilled = values.every(
      (task) =>
        task.location.trim() &&
        task.Radius.trim() &&
        task.Distance.trim() &&
        task.Vacancies.trim()
    );

    if (isAllFieldsFilled) {
      append({ location: "", Radius: "", Distance: "", Vacancies: "" });
    } else {
      ("");
    }
  };

  const handleVacanciesChange = (index, value, onChange) => {
    if (value < 0) {
      setErrorMessages((prev) => ({
        ...prev,
        [index]: "Vacancies cannot be negative",
      }));
    } else if (value) {
      setErrorMessages((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[index];
        return updatedErrors;
      });
    }
    onChange(value);
  };

  return (
    <div className="w-100 h-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} className="row mb-2">
            <div className="col-4">
              <label className="fs-size text-start d-block">
                Location<span className="text-danger">*</span>
              </label>
              <Controller
                name={`tasks.${index}.location`}
                control={control}
                rules={{ required: "Location is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Location"
                      className="form-control fontsize field-con"
                    />
                    {fieldState.error && (
                      <p className="text-danger fs-size">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="col-2">
              <label className="fs-size text-start d-block">
                Location Radius<span className="text-danger">*</span>
              </label>
              <Controller
                name={`tasks.${index}.Radius`}
                control={control}
                rules={{ required: "Radius is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      type="number"
                      placeholder="Radius"
                      className="form-control field-con"
                    />
                    {fieldState.error && (
                      <p className="text-danger fs-size">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="col-3">
              <label className="fs-size text-start d-block">
                Distance<span className="text-danger">*</span>
              </label>
              <Controller
                name={`tasks.${index}.Distance`}
                control={control}
                rules={{ required: "Distance is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <select
                      {...field}
                      className="form-control field-con"
                      style={{ fontSize: "14px" }}
                    >
                      <option>select</option>
                      <option value="Km">Km</option>
                      <option value="Mi">Mi</option>
                    </select>
                    {fieldState.error && (
                      <p className="text-danger fs-size">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="col-3 d-flex">
              <div>
                <label className="fs-size text-start d-block">
                  Number Of Vacancies<span className="text-danger">*</span>
                </label>
                <Controller
                  name={`tasks.${index}.Vacancies`}
                  control={control}
                  rules={{
                    required: "Vacancies are required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Vacancies must be a number",
                    },
                  }}
                  render={({ field: { value, onChange } }) => (
                    <div>
                      <input
                        style={{ fontSize: "12px" }}
                        value={value}
                        type="number"
                        className="form-control job-title-style"
                        placeholder="min"
                        onChange={(e) =>
                          handleVacanciesChange(index, e.target.value, onChange)
                        }
                      />

                      {/* {fieldState.error && (
                        <p className="text-danger fs-size">
                          {fieldState.error.message}
                        </p>
                      )} */}
                      {errorMessages[index] && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                          {errorMessages[index]}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              {index > 0 && (
                <div className="mt-3">
                  <button
                    type="button"
                    className="buttonDelete"
                    onClick={() => remove(index)}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mt-3">
          <button
            type="submit"
            className="fontsizes"
            onClick={handleAddButton}
            style={{ fontSize: "12px" }}
          >
            +
          </button>
          <br />
          <span className="fs-size">Add More Locations</span>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;
