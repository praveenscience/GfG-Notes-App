import React from "react";

const Welcome = ({ User }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Welcome, {User.Name}.</div>
      </div>
    </div>
  );
};

export default Welcome;
