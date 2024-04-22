import React from "react";
import sass from "../c.module.scss";
import logo from "../../pages/img/logo.jpg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={sass.header}>
      <div className={sass.container}>
        <div className={sass.left}>
        <ul>
            <NavLink className={sass.active ? sass.active : sass.a} to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/trivia"}>
              <li>Quiz</li>
            </NavLink>
            <NavLink to={"/register"}>
              <li>Register</li>
            </NavLink>
            <NavLink to={"/login"}>
              <li>Log in</li>
            </NavLink>
          </ul> 
        </div>
        <div className={sass.center}>
          <Link to={'/'}> <img src={logo} alt="" /></Link>
        </div>
        <div className={sass.right}>
         <ul>
          <li><i class="fa-brands fa-telegram"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-whatsapp"></i></li>
          <li><i class="fa-brands fa-facebook"></i></li>
         </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
