import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.JPG";
import { Context } from "../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          {user ? ( // Kullanıcı giriş yapmışsa
            <>
              <span>{user.username}</span>{" "}
              {/* Kullanıcının adını burada görüntüle */}
              <span onClick={handleLogout}>Logout</span>
              
                
                <Link className="linkWrite" to="/write">Write</Link>
              
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
