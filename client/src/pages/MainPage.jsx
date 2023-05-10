import React from "react";
import { Link } from "react-router-dom";
import Photo from "../images/photo2.JPG";

const NewPage = () => {
  return (
    <div className="main">
      <div className="image">
        <img src={Photo} alt="" />
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
