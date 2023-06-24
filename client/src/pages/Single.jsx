import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../components/Menu";
import axios from "axios";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={`http://localhost:5005/images/${post?.photo}`} alt="" />
        <div className="user">
          <img
            className="userImg"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="infoUser">
            <span className="username">{post.username}</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={"/write?edit=2"}>
              <AiOutlineEdit className="icon"></AiOutlineEdit>
            </Link>
            <Link className="link">
              <AiOutlineDelete className="icon"></AiOutlineDelete>
            </Link>
          </div>
        </div>
        <div className="infoPost">
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Single;
