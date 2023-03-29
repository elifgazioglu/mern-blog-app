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
          <h1>Yayınla</h1>
          <span>
            <b>Durum: </b> Taslak
          </span>
          <span>
            <b>Görünürlük: </b> Herkese Açık
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
          ></input>
          <label className="file" htmlFor="file">
            Fotoğraf Yükle
          </label>
          <div className="buttons">
            <button>Taslak olarak kaydet</button>
            <button>Güncelle</button>
          </div>
        </div>
        <div className="item">
          <h1>Kategori</h1>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art"></input>
            <label htmlFor="art">Sanat</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science"></input>
            <label htmlFor="science">Bilim</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="Technology"
              id="technology"
            ></input>
            <label htmlFor="Technology">Teknoloji</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Cinema" id="cinema"></input>
            <label htmlFor="Cinema">Sinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Design" id="design"></input>
            <label htmlFor="design">Tasarım</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Food" id="food"></input>
            <label htmlFor="food">Yemek</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
