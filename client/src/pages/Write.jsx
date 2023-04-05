import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title"></input>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Durum: </b> Taslak
          </span>
          <span>
            <b>Status: </b> Draft
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
          ></input>
          <label className="file" htmlFor="file">
          Upload Photo
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art"></input>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science"></input>
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="Technology"
              id="technology"
            ></input>
            <label htmlFor="Technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Cinema" id="cinema"></input>
            <label htmlFor="Cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Design" id="design"></input>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Food" id="food"></input>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
