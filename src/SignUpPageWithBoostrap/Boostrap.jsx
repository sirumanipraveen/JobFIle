
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUpForm(){   
  return (
    <div className="container">
      <div className="card shadow-sm" >
        <div className="card-body">
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
                  />
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
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
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
            <button type="submit" className="btn btn-primary w-100">
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

export default SignUpForm;
