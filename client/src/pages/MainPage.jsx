import React from "react";
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
        <button>Start reading</button>
      </div>
    </div>
  );
};

export default NewPage;
