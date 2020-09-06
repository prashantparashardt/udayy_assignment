import React from 'react'
import './Login.css'

function Login(props) {
return (
  <div className="login-form">
    <h1>Login</h1>
    <div className="textbox">
    <input id="user" type="text" placeholder="Username" name="un" />
    </div>
    <div className="textbox">
    <input id="pass" type="password" placeholder="Password" name="pw" />
    </div>
    <button className="btn"
      type="submit"
      onClick={() =>
        props.click(
          document.getElementById("user").value,
          document.getElementById("pass").value
        )
      }
    >
      {" "}
      Login
    </button>
  </div>
);
}

export default Login
