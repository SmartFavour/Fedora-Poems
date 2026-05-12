import React, { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}, password:${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={handlePassword}
          className="form-input"
        />
      </label>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default LoginPage;
