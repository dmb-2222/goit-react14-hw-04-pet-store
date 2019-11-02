import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const activStyle = {
  color: "red"
};

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.headerNav}>
          <li>
            <NavLink to="/" exact activeStyle={activStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pets" activeStyle={activStyle}>
              Pets
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={activStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
