import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

import JobRequireSkills from "../JobRequireSkill/JobRequireSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
function JobPrefferedSkills() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [skills, setSkills] = useState([]);
  const triggerRef = useRef();
  const onSubmit = (data) => {
    if (data.skill.trim()) {
      setSkills((prevSkills) => [...prevSkills, data.skill.trim()]);
      reset({ skill: "" });
    }
  };

  const open = () => {
    triggerRef.current.open();
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  return (
    <div className="row d-flex justify-content-between border rounded shadow-sm m-1 p-1 mt-3">
      
      <div className="col-5 p-3 container-bg rounded shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="job-title-style">Preferred Skills</h1>

          <div className="input-group mb-3">
            <div className="col-10">

            
            <Controller
              name="skill"
              control={control}
              defaultValue=""
              rules={{
                required: "Skill is required",
                minLength: {
                  value: 3,
                  message: "Skill must be at least 3 characters long",
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    className={`form-control Input-font-size  w-70 ${
                      errors.skill ? "is-invalid" : ""
                    }`}
                    placeholder="Enter skill"
                    aria-label="Enter a skill"
                  />
                  {errors.skill && (
                    <div className="invalid-feedback">
                      {errors.skill.message}
                    </div>
                  )}
                </>
              )}
            />
            </div>
            <div className="col-1">
             <button type="submit" className="button-size" >
              Add
            </button> 
            </div>
            
          </div>
        </form>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span >
                {skill}
                <span
                  className="delete-btn"
                  onClick={() => handleDeleteSkill(index)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <Whisper
                  ref={triggerRef}
                  trigger="click"
                  placement="right"
                  speaker={
                    <Popover title="Title">
                      <div className=" d-flex">
                        <select className="from-control">
                          <option>And</option>
                          <option>OR</option>
                        </select>
                        <input type="text" className="form-control" />
                        <button className="btn bg-primary ">Add</button>
                        <button>Concel</button>
                      </div>
                    </Popover>
                  }
                >
                  <span className="delete-btn" onClick={open}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </Whisper>
              </span>
            </div>
          ))}
        </div>
      </div>
     

      <div className="col-6">
        <JobRequireSkills />
       
      </div>
     
    </div>
  );
}

export default JobPrefferedSkills