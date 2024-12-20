
import axios from 'axios';
import {  Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

function AuthLogin() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const onSubmit = (data)=>{
        
        axios.post("https://api.escuelajs.co/api/v1/auth/login",data)

        .then((res)=>{
            alert("Login Seccess")
            localStorage.setItem("token",JSON.stringify(res.data.access_token))
            navigate("/profile")
        })
        .catch((err)=>{
            // console.log("login failed",err)
            alert("Login Failed",err)
        })

    }

  return (
   <>
  
  <form className='    border border-dark  h-70 w-80 m-2 container border-2-solid' onSubmit={handleSubmit(onSubmit)} >  
  <h1>Login </h1>

  <div className="mb-3  form-group ">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "email is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                ref={ref}
                value={value}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => {
                  console.log(e.target.value), onChange(e);
                }}
              />
            )}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

     

        <div className="mb-3 form-group">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "password is required" }}
            render={({ field: { ref, value, onChange } }) => (
              <input
                ref={ref}
                value={value}
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => {
                  console.log(e.target.value), onChange(e);
                }}
              />
            )}
          />
          {errors.password && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <button type='submit' className='button bg bg-primary m-3 text-white  rounded'  > Login</button>
  </form>

   </>
  )
}

export default AuthLogin