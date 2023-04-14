import React, { useState } from "react";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

 

  function handleSubmit(event) {
    
    event.preventDefault();

    if (username === "" || password === "") {
      setErrorMsg("Please fill in all fields");
    } else {
      // send login data to server
      console.log("Submitting data to server");
    }

    var user={
      username:username,
      password:password

    }

    console.log(user)
  }

  function addtolocalstorage(){

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);


  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={addtolocalstorage} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
