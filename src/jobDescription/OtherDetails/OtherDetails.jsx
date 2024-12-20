import { Controller, useForm } from "react-hook-form";
import "./OtherDetails.css";
import { useState } from "react";

function JobSummeryPart1() {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageMax, setErrorMessageMax] = useState("");
  const [errorMessagetitle, setErrorMessagetitle] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessageMax1, setErrorMessageMax1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessageMax2, setErrorMessageMax2] = useState("");

  const [minValue, setMinvalue] = useState();
  const [maxValue, setMaxvalue] = useState();
  const [minValue1, setMinvalue1] = useState();
  const [maxValue1, setMaxvalue1] = useState();

  const [minValue2, setMinvalue2] = useState();
  const [maxValue2, setMaxvalue2] = useState();

  console.log(maxValue);

  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="main-container w-100 h-100 ">
        <div className="main-con  border rounded shadow-sm mb-2 p-1 w-100 h-100">
          <h1 className="job-title-style">Other Details</h1>

          <div className="row">
            <div className=" form-group col-6 ">
              <label className="fs-size text-start d-block">
                Certifications
              </label>

              <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{ required: "Certifications is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  <input
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    type="text"
                    className="form-control job-title-style"
                    placeholder="Certifications"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("Certifications is required");
                      }
                      onChange(e);
                    }}
                  />
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
            <div className=" form-group col-5">
              <label className="fs-size text-start d-block">
                Notice Period
                <span className="text-danger ">*</span>
              </label>

              <Controller
                name="NoticePeriod
"
                control={control}
                defaultValue=""
                rules={{ required: "notice period required" }}
                render={({ field: { ref, value, onChange } }) => (
                  <input
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    type="number"
                    className="form-control job-title-style"
                    placeholder="Enter your jNotice Period"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("notice period is required");
                      }
                      onChange(e);
                    }}
                  />
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>

            <div className="col-1">
              <p className="style-days">Days</p>
            </div>
          </div>

          <div className="row">
            <div className=" form-group col-1 ">
              <label className="fs-size text-start d-block">Salary</label>

              <Controller
                name="Salary"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Enter your job title"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                    <option>USD</option>
                    <option>Uk</option>
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>

            <div className=" form-group col-1 ">
              <label className="fs-size text-start d-block">
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="per"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Enter your job title"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                    <option>Per Houre</option>
                    <option>Per Week</option>
                    <option>Per Month</option>
                    <option>Per Year</option>
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>

            <div className=" form-group col-2">
              <label className="fs-size text-start d-block">
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

            <div className=" form-group col-2">
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

            <div className=" form-group col-2">
              <label className="fs-size text-start d-block">Age</label>

              <Controller
                name="min"
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
                        const inputValue = e.target.value;

                        if (inputValue < 0) {
                          setErrorMessage("min cannot be negative");
                          setMinvalue(inputValue);
                        } else {
                          setMinvalue(inputValue);
                          setErrorMessage("");
                        }

                        onChange(e);
                      }}
                    />

                    {errorMessage && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {errorMessage}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className=" form-group col-2">
              <label className="fs-size text-start d-block">
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="max"
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
                        const inputValue = e.target.value;
                        setMaxvalue(inputValue);

                        if (maxValue < minValue) {
                          setErrorMessageMax("max value is Greater than min");
                        } else if (inputValue < 0) {
                          setErrorMessageMax("max cannot be negative");
                        } else {
                          setErrorMessageMax("");
                        }

                        onChange(e);
                      }}
                    />

                    {errorMessageMax && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {errorMessageMax}
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
              <label className="fs-size text-start d-block">Gender</label>

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
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                    <option>Any</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className=" form-group col-2">
              <label className="fs-size text-start d-block">
                Working Hours
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

            <div className=" form-group col-2">
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

            <div className=" form-group col-2 ">
              <label className="fs-size text-start d-block">
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="per"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Enter your job title"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                    <option>Per Houre</option>
                    <option>Per Week</option>
                    <option>Per Month</option>
                    <option>Per Year</option>
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>

            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">Job Timing</label>

              <Controller
                name="Jobiming"
                control={control}
                defaultValue=""
                rules={{ required: "Job Timing is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  <input
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    type="number"
                    className="form-control job-title-style"
                    placeholder="Job Timing"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("Job Timing is required");
                      }
                      onChange(e);
                    }}
                  />
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">Nationality</label>

              <Controller
                name="Nationality"
                control={control}
                defaultValue=""
                rules={{ required: "Nationality is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  <input
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    type="text"
                    className="form-control job-title-style"
                    placeholder="Nationality"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("Nationality is required");
                      }
                      onChange(e);
                    }}
                  />
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">
              Remote
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="per"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Enter your job title"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                     <option>select</option>
                    <option>Yes</option>
                
                    <option>No</option>

                    <option>May be</option>
                    
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">
              Offshore
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="per"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Enter your job title"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                     <option>select</option>
                    <option>No</option>
                    <option>Yes</option>
                    <option>May be</option>
                    {/* <option>Per Year</option> */}
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">
              Travel Required
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="Travel Required"
                control={control}
                defaultValue=""
                rules={{ required: "Salary is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                 
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("salery is required");
                      }
                      onChange(e);
                    }}
                  >
                     <option>select</option>
                    <option>No</option>
                    <option>Yes</option>
                    <option>May be</option>
                   
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
            <div className=" form-group col-3 ">
              <label className="fs-size text-start d-block">
                <span className="text-white ">*</span>
              </label>

              <Controller
                name="Passport Required"
                control={control}
                defaultValue=""
                rules={{ required: "Passport is required" }}
                render={({ field: { ref, value, onChange } }) => (
                  // <input

                  // />
                  <select
                    style={{ fontSize: "12px" }}
                    ref={ref}
                    value={value}
                    className="form-control job-title-style"
                    placeholder="Passport"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === "") {
                        setErrorMessagetitle("Passport is required");
                      }
                      onChange(e);
                    }}
                  >
                    <option>select</option>
                    <option>No</option>
                    <option>Yes</option>
                  
                  
                  </select>
                )}
              />
              {errorMessagetitle && (
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {errorMessagetitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobSummeryPart1;
