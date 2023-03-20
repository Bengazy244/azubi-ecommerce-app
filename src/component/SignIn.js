import React, { useState } from "react";

function SignIn({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner"></div>
      <h2>Sign in</h2>
      {error !== "" ? <div className="error">{error}</div> : ""}

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Sign in" />
      </div>
    </form>
  );
}

export default SignIn;
