import React, { useState } from "react";
import "../styles/Header.scss";
import { UserState } from "../context/UserProvider";
import { useNavigate, useParams } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import logo from '../styles/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  const { user } = UserState();

  const [route, setRoute] = useState(window.location.pathname);
  const navigate = useNavigate();
  const param = useParams();

  const logoutHandler = () => {
    document.cookie = `token=${null};max-age= 0`;
    toast('Logout Sucess full')
    alert('Logout Success full')
    navigate("/login");
  };

  const profileHandler = () => {
    navigate("/profile");
    setRoute(window.location.pathname);
  };
  const homeHandler = () => {
    navigate("/");
    setRoute(window.location.pathname);
  };
  return (
    <div className="header">
      <div>
        <div>
          <img src={logo} alt="logo" />
          <h2>Edu Metrics</h2>
        </div>
        <div>
          <ul>
            <li className={route === "/" ? "active" : ""} onClick={homeHandler}>
              <RiHome2Line size={30} />
            </li>
            <li
              className={route === "/profile" ? "active" : ""}
              onClick={profileHandler}
            >
              <BsPerson size={30} />
            </li>
            <li>
              <MdOutlineForwardToInbox size={30} />
            </li>
            <li>
              <FaCode size={30} />
            </li>
          </ul>
        </div>
        <div>
          <div className="image">
            <img src={user?.pic} alt={user?.name} />
            <div className="headerOption">
              <ul>
                <li onClick={profileHandler}>Profile</li>
                <li onClick={homeHandler}>Home</li>
                <li onClick={logoutHandler}>Logout</li>
                <li>Setting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
