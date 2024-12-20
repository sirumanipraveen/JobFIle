
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign-Up Data:", data);
    alert("Account created successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign-Up</h2>

      <label>
        Name:
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        
      </label>

      {errors.name && <p>{errors.name.message}</p>}
<br/>
      <label>
        Email:
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        <br/>
        <br/>
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label>
        Password:
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <br/>
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      <label>
        Confirm Password:
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value, { password }) =>
              value === password || "Passwords must match",
          })}
        />
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
<br/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
