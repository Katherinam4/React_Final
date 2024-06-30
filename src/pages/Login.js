import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/Login.scss";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({ setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      data.username === storedUser.username &&
      data.password === storedUser.password
    ) {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <img
        className="cover"
        src="https://i.pinimg.com/originals/bb/d4/9d/bbd49d849716ce6d569ec445569c0d45.jpg"
        alt="porsche"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          src="https://assets.identity.porsche.com/img/logo.png"
          alt="porsche"
        />
        <h2>Welcome</h2>
        <div>
          <label>Username</label>
          <input type="text" {...register("username")} />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <p className="already">
          Dont have an account? <Link to={"/registration"}>Register</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
