import React, { useState } from "react";
import "./App.css";
import SignIn from "./component/SignIn";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, SetError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Signed in");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      SetError`("Details do not match! Please <a href='/register</a>")`;
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    // console.log("Logout");
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <SignIn Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
