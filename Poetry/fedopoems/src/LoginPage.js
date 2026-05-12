import React, { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="form-input"
        placeholder="Name:"
      />
      <input
        value={password}
        onChange={handlePassword}
        className="form-input"
        placeholder="Password: "
        type="password"
      />

      <input
        // value={confirmpassword}
        onChange={handlePassword}
        className="form-input"
        placeholder="Confirm-Password: "
        type="password"
      />

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default LoginPage;
