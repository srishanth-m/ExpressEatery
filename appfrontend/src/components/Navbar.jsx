import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to="#">EatEZ</Link>
      </div>
      <ul className={style.navLinks}>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Explore</Link>
        </li>
        <li>
          <Link to="#">Favorites</Link>
        </li>
        <li>
          <Link to="#">Orders</Link>
        </li>
        <li>
          <Link to="#">Profile</Link>
        </li>
      </ul>
      <div className={style.userActions}>
        <button className={`${style.btn} ${style.btnPrimary}`}>Sign In</button>
        <button className={`${style.btn} ${style.btnSecondary}`}>
          <Link to="/login">Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
