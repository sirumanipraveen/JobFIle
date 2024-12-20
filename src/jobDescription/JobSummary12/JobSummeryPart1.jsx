import { Controller, useForm } from "react-hook-form";
import "./JobSummeryPart1.css";
import { useState } from "react";
import DynamicForm from "./JobSummaryPart1DynamicForm";
import JobPrefferedSkills from "../JobPreferedSkills/JobPrefferedSkills";
import JobDescriptionForm from "../JobDescriptionFold/JobDescription";
import Education from "../EducationDetails/Education";
import OtherDetails from "../OtherDetails/OtherDetails";
import PhysicalRequirement from "../PhysicalRequirement/PhysicalRequirement";
function JobSummeryPart1() {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageMax, setErrorMessageMax] = useState("");
  const [errorMessagetitle, setErrorMessagetitle] = useState("");

  const [minValue, setMinvalue] = useState();
  const [maxValue, setMaxvalue] = useState();
  console.log(maxValue);

  // console.log(minValue)
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="main-container w-100 h-100 ">
        <div className="main-con w-100 border rounded shadow-sm m-1 p-1 mt-3">
          <h1 className="job-title-style">Job Summary</h1>

          <div className="">
            <div className="row">
              <div className=" form-group col-3 ">
                <label className="fs-size text-start d-block">
                  Job Title
                  <span className="text-danger ">*</span>
                </label>

                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  rules={{ required: "title is required" }}
                  render={({ field: { ref, value, onChange } }) => (
                    <input
                      style={{ fontSize: "12px" }}
                      ref={ref}
                      value={value}
                      type="text"
                      className="form-control job-title-style"
                      placeholder="Enter your job title"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue === "") {
                          setErrorMessagetitle("Job title is required");
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

              <div className=" form-group col-2">
                <label className="fs-size text-start d-block">
                  Experience
                  <span className="text-danger ">*</span>
                </label>

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
                <div>
                  <select
                    className="fontsizes text-end d-block "
                    style={{ fontSize: "12px", backgroundColor: "white" }}
                  >
                    <option value="">Select</option>
                    <option className="fontsize">Prefered</option>
                    <option className="fontsize">Required</option>
                  </select>
                </div>

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
              <div className=" form-group col-2 ">
                <label className="fs-size text-start d-block">
                  Type Of Jobs
                  <span className="text-danger ">*</span>
                </label>
                <Controller
                  name="jobType "
                  control={control}
                  defaultValue=""
                  rules={{ required: "job type is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`form-control fontsize job-title-style  ${
                        errors.jobType ? "is-invalid" : ""
                      }`}
                      style={{ fontSize: "12px" }}
                    >
                      <option value="" className="fontsize">
                        Select Job Type
                      </option>
                      <option value="Full Time" className="fontsize">
                        Full Time
                      </option>
                      <option value="Part Time" className="fontsize">
                        Part Time
                      </option>
                      <option value="Temp to Hire" className="fontsize">
                        Temp to Hire
                      </option>
                      <option value="Contract" className="fontsize">
                        Contract
                      </option>
                    </select>
                  )}
                />
                {errors.jobType && (
                  <p className="text-danger" style={{ fontSize: "12px" }}>
                    {errors.jobType.message}
                  </p>
                )}
              </div>

              <div className=" form-group col-3 ">
                <label className="fs-size text-start d-block">
                  Language
                  <span className="text-danger ">*</span>
                </label>
                <Controller
                  className="fontsize"
                  name="title"
                  control={control}
                  defaultValue=""
                  rules={{ required: "title is required" }}
                  render={({ field }) => (
                    <select
                      style={{ fontSize: "12px" }}
                      {...field}
                      className={`form-control job-title-style ${
                        errors.jobType ? "is-invalid" : ""
                      }`}
                    >
                      <option value="" className="fontsize">
                        Select Job Type
                      </option>
                      <option value="telugu" className="fontsize">
                        telugu
                      </option>
                      <option value="hindi" className="fontsize">
                        hindi
                      </option>
                      <option value="english" className="fontsize">
                        english
                      </option>
                      <option value="maliyalam" className="fontsize">
                        maliyalam
                      </option>
                    </select>
                  )}
                />
                {errors.title && (
                  <p className="text-danger" style={{ fontSize: "12px" }}>
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="Location-style col-12">
                <DynamicForm />
              </div>
            </div>
          </div>
        </div>
        <div>
          <JobPrefferedSkills  />
        </div>
        <div>
          <JobDescriptionForm />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <OtherDetails />
        </div>
        <div>
          <PhysicalRequirement />
        </div>
        <div className="row">
          <br />

          <br />
        </div>
      </div>
    </>
  );
}

export default JobSummeryPart1;
