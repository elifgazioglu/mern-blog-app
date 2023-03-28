import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://i.pinimg.com/736x/c6/24/b9/c624b9ed4a302818465e60e2efbc9a6a.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://img.mensxp.com/media/content/2020/Aug/AMP_imghappy-girl-taking-a-selfie_5f4a2e4438bf3.jpeg"
            alt=""
          />
          <div className="info">
            <span>Elif</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link>
              <AiOutlineEdit></AiOutlineEdit>
            </Link>
            <Link>
              <AiOutlineDelete></AiOutlineDelete>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
