import React from "react";
import LoginForm from "./_LoginForm";

const Login = ({ handleAuth, Error }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LoginForm handleAuth={handleAuth} Error={Error} />
        </div>
        <div className="col-6">Register</div>
      </div>
    </div>
  );
};

export default Login;
