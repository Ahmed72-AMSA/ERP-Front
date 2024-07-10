import "./LoginForm.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LockSVG from "../SVG/LockSVG";
import EmailSVG from "../SVG/EmailSVG";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("companyName", data.company_name);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await axios.post("http://localhost:5072/api/Authentications", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from server:", response.data);
      toast.success("Signup successful!", { position: "top-right" });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, { position: "top-right" });
      } else if (error.response && error.response.data) {
        toast.error(error.response.data, { position: "top-right" });
      } else {
        toast.error("An unexpected error occurred.", { position: "top-right" });
      }
    }
};

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)} className="signup-react-form">

        <div className="form-input">
          <EmailSVG />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
        </div>
        <div className="form-input">
          <LockSVG />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Log-In</button>
      </form>
    </div>
  );
};

export default LoginForm;
