import "./Signup.css";
import React from "react";
import { Link } from "react-router-dom";
import AppleSVG from "../SVG/AppleSVG";
import AutumnSVG from "../SVG/AutumnSVG";
import GoogleSVG from "../SVG/GoogleSVG";
import FacebookSVG from "../SVG/FacebookSVG";
import SignupForm from "../SignupForm/SignupForm";
import ErpSvg from "../SVG/ErpSVG";

const SignupPage = () => {
  return (
    <div className="signup-from">
      <div className="signup-froml">
        <AutumnSVG />
      </div>
      <div className="signup-fromr">
        <div className="form-header">
          <ErpSvg />
          <p>Create Account</p>
        </div>
        <div className="form">
          <SignupForm />
        </div>
        <div className="form-footer">
          <p className="text-legend">- OR -</p>
          <div className="social-icons">
            <span className="social-icon">
              <GoogleSVG />
            </span>
            <span className="social-icon">
              <FacebookSVG />
            </span>
            <span className="social-icon">
              <AppleSVG />
            </span>
          </div>
          <p className="text-footer">
            Already have an account? <Link to="/" className="text-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
