import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Registration.scss";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Registration = ({ setIsRegistered }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ username: data.username, password: data.password })
    );
    localStorage.setItem("isAuthenticated", true);
    navigate("/");
  };

  return (
    <div className="registration">
      <div className="images">
        <div>
          <img src="https://signup.porsche.com/assets/images/prospect/register-prospect-top-left.webp" />
          <img src="https://signup.porsche.com/assets/images/prospect/register-prospect-top-right.webp" />
        </div>
        <h2>Connect Moments That Matter</h2>
        <div>
          <img src="https://signup.porsche.com/assets/images/prospect/register-prospect-bottom-left.webp" />
          <img src="https://signup.porsche.com/assets/images/prospect/register-prospect-bottom-right.webp" />
        </div>
      </div>
      <div className="form">
        <h2>Become part of the Porsche family!</h2>
        <p>
          Create your personal <span>Porsche ID</span>, your access to the world
          of Porsche.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username: </label>
            <input type="text" {...register("username")} />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label>Password: </label>
            <input type="password" {...register("password")} />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <p className="already">
            Already Registered? <Link to={"/login"}>Log In</Link>
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
