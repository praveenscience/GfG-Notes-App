import React from "react";
import LoginForm from "./_LoginForm";
import RegForm from "./_RegForm";

const Login = ({ handleAuth, handleReg, AuthError, RegError, RegSuccess }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LoginForm handleAuth={handleAuth} Error={AuthError} />
        </div>
        <div className="col-6">
          <RegForm
            handleReg={handleReg}
            Error={RegError}
            Success={RegSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
