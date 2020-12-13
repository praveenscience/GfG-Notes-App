import React from "react";

const WelcomeHeader = ({ User, handleLogout }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="border rounded p-2">
          <p className="mb-1">Welcome, {User.Name}.</p>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
