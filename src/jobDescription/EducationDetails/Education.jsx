// import "./Education.css";
// import { useFieldArray, useForm, Controller } from "react-hook-form";
// import { useState } from "react";

// function Education() {
//   const [datas, setData] = useState([]);

//   const { control, handleSubmit, getValues } = useForm({
//     defaultValues: {
//       tasks: [{ DegreeLevel: "", Degree: "", major: "" }],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "tasks",
//   });

//   const onSubmit = (data) => {
//     setData([...datas, data]);
//   };

//   const handleAddButton = () => {
//     const values = getValues("tasks");
//     const isAllFieldsFilled = values.every(
//       (task) =>
//         task.DegreeLevel.trim() &&
//         task.Degree.trim() &&
//         task.major.trim()
//     );

//     if (isAllFieldsFilled) {
//       append({ DegreeLevel: "", Degree: "", major: "" });
//     } else {
//       alert("Please fill in all fields before adding a new entry.");
//     }
//   };

//   return (
//     <div className="border rounded shadow-sm m-1 p-1 mt-3">
//       <h1 className="job-title-style">Education</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {fields.map((field, index) => (
//           <div key={field.id} className="row mb-2">
//             <div className="col-4">
//               <label className="fs-size text-start d-block">Degree Level</label>
//               <Controller
//                 name={`tasks.${index}.DegreeLevel`}
//                 control={control}
//                 rules={{ required: "Degree Level is required" }}
//                 render={({ field, fieldState }) => (
//                   <>
//                     <input
//                       {...field}
//                       placeholder="Degree Level"
//                       className="form-control fontsize field-con"
//                     />
//                     {fieldState.error && (
//                       <p className="text-danger fs-size">
//                         {fieldState.error.message}
//                       </p>
//                     )}
//                   </>
//                 )}
//               />
//             </div>

//             <div className="col-4">
//               <label className="fs-size text-start d-block">Degree</label>
//               <Controller
//                 name={`tasks.${index}.Degree`}
//                 control={control}
//                 rules={{ required: "Degree is required" }}
//                 render={({ field, fieldState }) => (
//                   <>
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Degree"
//                       className="form-control field-con"
//                     />
//                     {fieldState.error && (
//                       <p className="text-danger fs-size">
//                         {fieldState.error.message}
//                       </p>
//                     )}
//                   </>
//                 )}
//               />
//             </div>

//             <div className="col-4">
//               <label className="fs-size text-start d-block">
//                 Major<span className="text-danger">*</span>
//               </label>
//               <Controller
//                 name={`tasks.${index}.major`}
//                 control={control}
//                 rules={{ required: "Major is required" }}
//                 render={({ field, fieldState }) => (
//                   <>
//                     <input
//                       {...field}
//                       type="text"
//                       placeholder="Major"
//                       className="form-control field-con"
//                     />
//                     {fieldState.error && (
//                       <p className="text-danger fs-size">
//                         {fieldState.error.message}
//                       </p>
//                     )}
//                   </>
//                 )}
//               />
//             </div>

//             <div className="mt-3">
//               <button
//                 type="button"
//                 className="buttonDelete"
//                 onClick={() => remove(index)}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         ))}

//         <div className="mt-3">
//           <button
//             type="button"
//             className="fontsizes"
//             onClick={handleAddButton}
//             style={{ fontSize: "12px" }}
//           >
//             +
//           </button>
//           <br />
//           <span className="fs-size">Add More Locations</span>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Education;

import "./Education.css";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useState } from "react";

function Education() {
  const [datas, setData] = useState([]);

  const { control, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: {
      tasks: [
        {
          DegreeLevel: "",
          Degree: "",
          major: "",
          Institutions: "",
          GraduatedYear: "",
          Importance: "",
          Merit: "",
        },
      ],
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
        task.DegreeLevel.trim() &&
        task.Degree.trim() &&
        task.major.trim() &&
        task.Institutions.trim() &&
        task.GraduatedYear.trim() &&
        task.Importance.trim() &&
        task.Merit.trim()
    );

    if (isAllFieldsFilled) {
      append({
        DegreeLevel: "",
        Degree: "",
        major: "",
        Institutions: "",
        GraduatedYear: "",
        Importance: "",
        Merit: "",
      });
    } else {
      ("");
    }
  };

  return (
    <div className="border rounded shadow-sm m-1 p-2 mt-3">
      <h1 className="job-title-style">Education</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} className="row mb-2">
            <div className="col-4 pl-1">
              <label className="fs-size text-start d-block">Degree Level</label>
              <Controller
                name={`tasks.${index}.DegreeLevel`}
                control={control}
                rules={{ required: "Degree Level is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Degree Level"
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

            <div className="col-4">
              <label className="fs-size text-start d-block">Degree</label>
              <Controller
                name={`tasks.${index}.Degree`}
                control={control}
                rules={{ required: "Degree is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Degree"
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

            <div className="col-4">
              <label className="fs-size text-start d-block">
                Major<span className="text-danger">*</span>
              </label>
              <Controller
                name={`tasks.${index}.major`}
                control={control}
                rules={{ required: "Major is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Major"
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

            {/* Second Row */}
            <div className="col-4">
              <label className="fs-size text-start d-block">Institutions</label>
              <Controller
                name={`tasks.${index}.Institutions`}
                control={control}
                rules={{ required: "Institutions is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Institutions"
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

            <div className="col-2">
              <label className="fs-size text-start d-block">
                Graduated Year
              </label>
              <Controller
                name={`tasks.${index}.GraduatedYear`}
                control={control}
                rules={{ required: "Graduated Year is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <input
                      {...field}
                      type="number"
                      placeholder="Graduated Year"
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

            <div className="col-4 d-flex mb-2">
              <div className="">
                <label className="fs-size text-start d-block">
                  Merit<span className="text-danger">*</span>
                </label>
                <Controller
                  name={`tasks.${index}.Merit`}
                  control={control}
                  rules={{
                    required: "Merit is required",
                    validate: (value) =>
                      watch(`tasks.${index}.MeritType`) === "GPA"
                        ? value <= 10 || "GPA must be 10 or below"
                        : value <= 100 || "Percentage must be 100 or below",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <input
                        {...field}
                        type="number"
                        placeholder={
                          watch(`tasks.${index}.MeritType`) === "GPA"
                            ? "GPA"
                            : "Percentage"
                        }
                        className="form-control field-con"
                        max={
                          watch(`tasks.${index}.MeritType`) === "GPA" ? 10 : 100
                        }
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

              <div className="">
                <div className="d-flex align-items-center mt-3 p-1">
                  <label className="me-2 d-flex ">
                    <input
                      type="radio"
                      name={`tasks.${index}.MeritType`}
                      value="GPA"
                      onChange={() =>
                        setValue(`tasks.${index}.MeritType`, "GPA")
                      }
                      checked={watch(`tasks.${index}.MeritType`) === "GPA"}
                    />
                    <p>GPA</p>
                  </label>
                  <label className="ms-3 d-flex ">
                    <input
                      type="radio"
                      name={`tasks.${index}.MeritType`}
                      value="Percentage"
                      onChange={() =>
                        setValue(`tasks.${index}.MeritType`, "Percentage")
                      }
                      checked={
                        watch(`tasks.${index}.MeritType`) === "Percentage"
                      }
                    />
                    <p>Paracentage</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="col-2">
              <label className="fs-size text-start d-block">Importance</label>
              <Controller
                name={`tasks.${index}.Importance`}
                control={control}
                rules={{ required: "Importance is required" }}
                render={({ field, fieldState }) => (
                  <>
                    {/* <input
                      {...field}
                      type="text"
                      placeholder="Importance"
                      className="form-control field-con"
                    /> */}
                    <select
                      {...field}
                      type="text"
                      placeholder="Importance"
                      className="form-control field-con"
                    >
                      <option>Prefered</option>
                      <option>Required</option>
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

            <div className="mt-3 d-flex flex-row justify-content-end">
              <button
                type="button"
                className="buttonDelete"
                onClick={() => remove(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}

        <div className="mt-3 ">
          <button
            type="submit"
            className="fontsizes"
            onClick={handleAddButton}
            style={{ fontSize: "12px" }}
          >
            +
          </button>
          <br />
          <span className="fs-size">Add More Education </span>
        </div>
      </form>
    </div>
  );
}

export default Education;
