import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
// import "./JobPrefferedSkills.css";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
function JobRequireSkills() {
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
    <div className="p-3 container-bg  border rounded shadow-sm m-1 p-1 mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="job-title-style">Required Skills</h1>

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
                    className={`form-control Input-font-size ${
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
          <div>
            <button type="submit" className="button-size">
              Add
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="skills-list col-12">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-text">
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
    </div>
  );
}

export default JobRequireSkills;
