import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignOfLoginPage() {
  const [active, setActive] = useState(false);
  const [sign, setSign] = useState(false);
  const [username1, setUsername] = useState("");
  const [password1, setPassword] = useState("");
console.log(username1,password1)

  if (sign) {
    return <Navigate to="/" />;
  }

  if (active) {
    return <Navigate to="/home" />;
  }

  const handleLoginButton = (e) => {
    e.preventDefault(); 

    const userDetails = JSON.parse(localStorage.getItem("user"));
    const isValidUser = userDetails.some((item) =>
        item.email === username1.trim() && item.password === password1.trim()
    );

    if (isValidUser) {
      setActive(true); 
    }else{
        alert("invalid credential")
    }
  };

  return (
    <div className="container vw-100 d-flex justify-content-center align-items-center wl-2">
      <div className="card shadow-sm" style={{ width: "20rem" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleLoginButton}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={username1}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password1}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

           

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>

            <p className="text-center mt-3">
              I don’t have any account?{" "}
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => setSign(true)}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignOfLoginPage
