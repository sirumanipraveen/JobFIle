import { Controller, useForm } from "react-hook-form";
import "./Physical.css";
import { useState } from "react";
function PhysicalRequirement() {
  const [minValue2, setMinvalue2] = useState();
  const [maxValue2, setMaxvalue2] = useState();
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessageMax2, setErrorMessageMax2] = useState("");
  const [minValue1, setMinvalue1] = useState();
  const [maxValue1, setMaxvalue1] = useState();
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessageMax1, setErrorMessageMax1] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  const [minValue3, setMinvalue3] = useState();
  const [minValue4, setMinvalue4] = useState();
  console.log(minValue3, minValue4);
  const [errorMessage4, setErrorMessage4] = useState("");

  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="row w-100 border rounded shadow-sm m-1 p-1 mt-3">
        <h1 className="title">Physical Requirement</h1>

        <div className=" form-group col-2">
          <label className="fs-size text-start d-block">
            Height
            
          </label>

          <Controller
            name="minValue2"
            control={control}
            defaultValue=""
            rules={{
              required: "Min is required",
              validate: (value) =>
                value >= 0 || "Min cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="min"
                  onChange={(e) => {
                    const inputValue2 = e.target.value;

                    if (inputValue2 < 0) {
                      setErrorMessage2("min cannot be negative");
                      setMinvalue2(inputValue2);
                    } else {
                      setMinvalue2(inputValue2);
                      setErrorMessage2("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessage2 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage2}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            <span className="text-white ">*</span>
          </label>

          <Controller
            name="maxValue2"
            control={control}
            defaultValue=""
            rules={{
              required: "max is required",
              validate: (value) =>
                value >= 0 || "Max cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="max"
                  onChange={(e) => {
                    const inputValue2 = e.target.value;
                    setMaxvalue2(inputValue2);

                    if (maxValue2 < minValue2) {
                      setErrorMessageMax2("max value is Greater than min");
                    } else if (inputValue2 < 0) {
                      setErrorMessageMax2("max cannot be negative");
                    } else {
                      setErrorMessageMax2("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessageMax2 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessageMax2}
                  </p>
                )}
              </div>
            )}
          />
          {errors.max && (
            <p className="text-danger" style={{ fontSize: "12px" }}>
              {errors.min.message}
            </p>
          )}
        </div>

        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            Weight
            <span className="text-white ">*</span>
          </label>

          <Controller
            name="minValue"
            control={control}
            defaultValue=""
            rules={{
              required: "Min is required",
              validate: (value) =>
                value >= 0 || "Min cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="min"
                  onChange={(e) => {
                    const inputValue1 = e.target.value;

                    if (inputValue1 < 0) {
                      setErrorMessage1("min cannot be negative");
                      setMinvalue1(inputValue1);
                    } else {
                      setMinvalue1(inputValue1);
                      setErrorMessage1("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessage1 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage1}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            <span className="text-white ">*</span>
          </label>

          <Controller
            name="maxValue"
            control={control}
            defaultValue=""
            rules={{
              required: "max is required",
              validate: (value) =>
                value >= 0 || "Max cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="max"
                  onChange={(e) => {
                    const inputValue1 = e.target.value;
                    setMaxvalue1(inputValue1);

                    if (maxValue1 < minValue1) {
                      setErrorMessageMax1("max value is Greater than min");
                    } else if (inputValue1 < 0) {
                      setErrorMessageMax1("max cannot be negative");
                    } else {
                      setErrorMessageMax1("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessageMax1 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessageMax1}
                  </p>
                )}
              </div>
            )}
          />
          {errors.max && (
            <p className="text-danger" style={{ fontSize: "12px" }}>
              {errors.min.message}
            </p>
          )}
        </div>

        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            <span className="text-white">*</span>
          </label>

          <Controller
            name="Salary"
            control={control}
            defaultValue=""
            rules={{ required: "Salary is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <select
                style={{ fontSize: "12px" }}
                ref={ref}
                value={value}
                className="form-control job-title-style"
                placeholder="Enter your job title"
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option>Kgs</option>
                <option>lbs</option>
              </select>
            )}
          />
        </div>

        {/* //2 */}
        <div className=" form-group col-2">
          <label className="fs-size text-start d-block">
            Move Objects
            <span className="text-danger">*</span>
          </label>

          <Controller
            name="minValue2"
            control={control}
            defaultValue=""
            rules={{
              required: "Min is required",
              validate: (value) =>
                value >= 0 || "Min cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="min"
                  onChange={(e) => {
                    const inputValue3 = e.target.value;

                    if (inputValue3 < 0) {
                      setErrorMessage3("min cannot be negative");
                      setMinvalue3(inputValue3);
                    } else {
                      setMinvalue3(inputValue3);
                      setErrorMessage3("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessage3 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage3}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            <span className="text-white">*</span>
          </label>

          <Controller
            name="Salary"
            control={control}
            defaultValue=""
            rules={{ required: "Salary is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <select
                style={{ fontSize: "12px" }}
                ref={ref}
                value={value}
                className="form-control job-title-style"
                placeholder=""
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option>Kgs</option>
                <option>lbs</option>
              </select>
            )}
          />
        </div>
        <div className=" form-group col-2">
          <label className="fs-size text-start d-block">
            Lift Objects
            <span className="text-danger">*</span>
          </label>

          <Controller
            name="minValue2"
            control={control}
            defaultValue=""
            rules={{
              required: "Min is required",
              validate: (value) =>
                value >= 0 || "Min cannot be a negative value",
            }}
            render={({ field: { ref, value, onChange } }) => (
              <div>
                <input
                  style={{ fontSize: "12px" }}
                  ref={ref}
                  value={value}
                  type="number"
                  className="form-control job-title-style"
                  placeholder="min"
                  onChange={(e) => {
                    const inputValue4 = e.target.value;

                    if (inputValue4 < 0) {
                      setErrorMessage4("min cannot be negative");
                      setMinvalue2(inputValue4);
                    } else {
                      setMinvalue4(inputValue4);
                      setErrorMessage4("");
                    }

                    onChange(e);
                  }}
                />

                {errorMessage4 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage4}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className=" form-group col-1">
          <label className="fs-size text-start d-block">
            <span className="text-white">*</span>
          </label>

          <Controller
            name="Salary"
            control={control}
            defaultValue=""
            rules={{ required: "Salary is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <select
                style={{ fontSize: "12px" }}
                ref={ref}
                value={value}
                className="form-control job-title-style"
                placeholder=""
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option>Kgs</option>
                <option>lbs</option>
              </select>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default PhysicalRequirement;
