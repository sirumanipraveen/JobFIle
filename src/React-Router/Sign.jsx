import { useState } from "react";
import { Navigate } from "react-router-dom";





function SignForm() {
   const [active, setActive] = useState(false)
   if(active){
    return <Navigate to="/login"/>
   }

  return (
    <div className="container ">
      <div className="card shadow-sm d-flex justify-content-center align-items-center vw-100 vh-100">
        
       
        <div className="card-body " style={{width:"30rem" ,border:"2px solid blac "}} >
          <h3 className=" text-center mb-4">Sign Up</h3>
          <p className="text-center  mb-4">
            Please fill in this form to create an account!
          </p>
          <form>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />-
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheckbox"
              />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I accept the <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={ ()=> setActive(true)}>
              Sign Up
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="#">Login here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}



export default SignForm