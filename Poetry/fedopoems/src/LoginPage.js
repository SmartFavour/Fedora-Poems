import React, { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      alert(`Logging in with name: ${name}`);
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      }
    }
    alert(`Signed up with name: ${name}`);
  };

  return (
    <div className="login-page">
      {/* <button className="back-button" onClick={() => window.history.back()}>
        ←
      </button>*/}

      <div>
        <h2 className="form-title">
          {isLogin ? "Welcome Back" : "Create Accout"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        {/* {!isLogin && (*/}
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Name"
            required
          />
        </div>
        {/* // )}*/}

        <div className="form-group">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Confirm Password "
              type="password"
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account"}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
