import React from "react";

function SignIn() {
  return (
    <form>
      <div className="form-inner"></div>
      <h2>Sign in</h2>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <br />
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" id="password" />
      </div>
      <div className="form-group">
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default SignIn;
