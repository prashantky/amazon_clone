import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../Firebase";
const Login = () => {
  const [contact, setContact] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();
  console.log(">>>>>>>>>>>>>>>>>>>>>>", contact);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact({ ...contact, [name]: value });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(contact.email, contact.password)
    .then((auth)=>{
        if(auth){
            history.push("/")
        }
        
    }).catch((error)=>alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(contact.email, contact.password)
      .then((auth) => {
        if(auth){
            history.push("/")
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo-sign"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>

        <form className="form-details">
          <div className="user-name">
            <label>Enter Email</label>
            <input
              type="email"
              id="mail"
              name="email"
              onChange={handleChange}
              value={contact.email}
            />
          </div>
          <div className="user-name">
            <label>Enter password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={contact.password}
            />
          </div>
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_register" onClick={register}>
          Create a account
        </button>
      </div>
    </div>
  );
};
export default Login;
