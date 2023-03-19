import React from 'react'

function SignIn() {
  return (
    
    <form>
      <div className="form-inner"></div>
      <h2>Sign in</h2>
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="LOGIN" />
      </div>
    </form>
     
  )
}

export default SignIn
