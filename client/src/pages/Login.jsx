import { useState, React, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/Context";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const clearInputs = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5005/api/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      clearInputs();
      console.log(res.data);
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err);
      setErrorMessage("Invalid email or password");
      clearInputs();
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  console.log(user);
  console.log(isFetching);

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          name="email"
          ref={emailRef}
          placeholder="email"
        />
        <input
          required
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="password"
        />
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
        <span>
          Dont't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
