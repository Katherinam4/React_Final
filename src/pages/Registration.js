import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="registration"
    >
      <div className="images">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="https://signup.porsche.com/assets/images/prospect/register-prospect-top-left.webp"
            alt="top-left"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="https://signup.porsche.com/assets/images/prospect/register-prospect-top-right.webp"
            alt="top-right"
          />
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Connect Moments That Matter
        </motion.h2>
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            src="https://signup.porsche.com/assets/images/prospect/register-prospect-bottom-left.webp"
            alt="bottom-left"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            src="https://signup.porsche.com/assets/images/prospect/register-prospect-bottom-right.webp"
            alt="bottom-right"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="form"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Become part of the Porsche family!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Create your personal <span>Porsche ID</span>, your access to the world
          of Porsche.
        </motion.p>
        <motion.form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <label>Username: </label>
            <input type="text" {...register("username")} />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <label>Password: </label>
            <input type="password" {...register("password")} />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="already"
          >
            Already Registered? <Link to={"/login"}>Log In</Link>
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            type="submit"
          >
            Register
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Registration;
