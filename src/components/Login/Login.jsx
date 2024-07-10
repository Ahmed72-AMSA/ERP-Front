import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import ErpSvg from "../SVG/ErpSVG";
import login_logo from "../../assets/login.jpg";

const Login = () => {
  return (
    <div className="signup-from">
      <div className="signup-froml">
        <img src={login_logo} alt="Login" />
      </div>

      <div className="signup-fromr">
        <div className="form-header">
          <ErpSvg />
          <p>Start Your Work Now!</p>
        </div>
        <div className="form">
          <LoginForm />
        </div>
        <div className="form-footer">
          <p className="text-footer">
            Create Account? <Link to="/signup" className="text-link">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
