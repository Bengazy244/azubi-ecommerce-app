import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Account created successfully!");

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match!");

      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className="form-header">
        <p>Already have an account?</p>
        <div className="signin-container">
          <a href={"HomePage"}>Sign in</a>
        </div>
      </div>

      <div className="form-container">
        <h3>Create an Account</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address:</label>

          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">Confirm Password:</label>

          <input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Create an Account</button>
        </form>
      </div>
    </>
  );
};
export default RegisterPage;
