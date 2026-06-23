import React from "react";

function RegistrationForm() {
  return (
    <div className="container">
      <h3>Register Here</h3>

      <input type="text" placeholder="Enter Name" />
      <br /><br />

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <input type="text" placeholder="Enter Department" />
      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default RegistrationForm;