// SignupForm.js

import "./SignupForm.css";
import React, { useState } from "react";
import UserSVG from "../SVG/UserSVG";
import LockSVG from "../SVG/LockSVG";
import EmailSVG from "../SVG/EmailSVG";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null); // State to hold the selected image file

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Update state with the selected image file
  };

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    console.log("Image file:", image); // Handle image file submission as needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-react-form">
      <div className="form-input">
        <UserSVG />
        <label htmlFor="companyName">Company Name</label>
        <input
          id="company_name"
          placeholder="Enter Company Name"
          {...register("company_name", { required: "Full name is required" })}
        />
        {errors.fullname && (
          <p className="text-red">{errors.fullname.message}</p>
        )}
      </div>
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
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red">{errors.password.message}</p>
        )}
      </div>
      <div className="form-input">
        <label htmlFor="image">Upload Company Image</label>
        <label htmlFor="image" className="image-upload-btn">
          <FontAwesomeIcon icon={faUpload} />
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }} // Hide the default file input
        />
      </div>
      <button type="submit">Sign-Up</button>
    </form>
  );
};

export default SignupForm;
