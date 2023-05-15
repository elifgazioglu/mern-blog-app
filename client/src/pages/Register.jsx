import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5005/api/auth/email/${formData.email}`);
      if (res.data.user) {
        setErrorMessage("Email address already exists");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else if (formData.password.length < 6) {
        setErrorMessage("Password must be longer than 6 characters");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else {
        const res = await axios.post("http://localhost:5005/api/auth/register", formData);
        setFormData({username: "", email: "", password: ""});
        console.log(res.data);
        navigate('/home');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="authRegister">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
        <span>
          Do you have any account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
