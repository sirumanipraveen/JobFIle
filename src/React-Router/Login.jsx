    import { Form } from 'react-bootstrap';
    import { Controller, useForm } from 'react-hook-form';
    import { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { Navigate } from 'react-router-dom';
    import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
    import './Login.css'
    function SignOfForm() {
      const { control, handleSubmit, formState: { errors } ,getValues} = useForm();
      const [active, setActive] = useState(false);
      const [newdata, setNewdata] = useState([]);
      const [sign, setSign] = useState(false);
      const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      console.log(newdata,"newdata");
      if (sign) {
        return <Navigate to="/login" />
      }
      const onSubmit = (data) => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        const updatedData = [...newdata, data];
        setNewdata(updatedData);
        localStorage.setItem("user", JSON.stringify(updatedData));
       
        setActive(true)
      }
      if (active) { return <Navigate to="/login" />; }
      return (
        <div className="grid-container mt-1">
          <div  className="form-card">
            <h1 className='Sign-style p-2'> Sign In</h1>
            <div >
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="con-first-second">
                <Form.Group controlId="FirstName" >
                 
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "first name is required" }}
                    render={({ field }) => (
                      <Form.Control
                      className='Capitalize'
                        type="text"
                        placeholder="Enter your first name"
                        isInvalid={!!errors.firstName}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>   
                <Form.Group controlId="LastName" >
                
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Last Name is required" }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        isInvalid={!!errors.lastName}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
          </div>
              

                <Form.Group controlId="email" className='mt-4'>
                  
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "email is required",
                      minLength: { value: 4, message: "email is invalid" },
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        isInvalid={!!errors.email}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label className='mb-0'>phone</Form.Label>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "phone is required",
                      minLength: { value:10, message: "phone number is invalid"  },
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="number"
                        placeholder="Enter your phone number"
                        isInvalid={!!errors.phone}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-4">
        <Form.Label className='mb-0'>Password</Form.Label>
        <div className="input-with-icon">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                isInvalid={!!errors.password}
              />
            )}
          />
          <span
            className="password-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ?  faEye  :faEyeSlash  } className='icon-size'/>
          </span>
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

    
      <Form.Group controlId="confirmPassword" className="mb-5">
        <div className="input-with-icon">
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Confirm Password is required",
              validate: (value) => {
                return value === getValues("password") || "Passwords do not match";
              }
            }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                isInvalid={!!errors.confirmPassword}
              />
            )}
          />
          <span 
            className="password-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ?  faEye :faEyeSlash }  className='icon-size'/>
          </span>
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

                   <div className='arrange-box-in-row'>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="termsCheckbox"
                    required
                  />
                  <label className="form-check-label check-box-style container" htmlFor="termsCheckbox">
                    I accept the <a href="#">Terms of Use </a> &amp;{" "}
                    <a href="#">Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary  button-style" >
                  Submit
                </button>
                
                </div>

                <p className="Agrement text-end">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="btn btn-link "
                    onClick={() => setSign(true)}
                  >
                  Login
                  </button>
                </p>

              </Form>
            </div>
          </div>
        </div>
      );
    }

export default SignOfForm
