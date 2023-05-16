import React from "react";
import { Link } from "react-router-dom";

const NewPage = () => {
  return (
    <div className="main">
      <div className="image">
        <img src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className="items">
        <h1>Stay curious.</h1>
        <p>
          Discover stories, thinking, and <br />
          expertise from writers on any topic.
        </p>
        <Link className="link" to="/login">Start reading</Link>
      </div>
    </div>
  );
};

export default NewPage;
