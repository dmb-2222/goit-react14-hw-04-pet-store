import React from "react";
import styles from "../../style.module.css";
import { Link } from "react-router-dom";

const Pet = ({ name, image, id }) => {
  return (
    <Link to={`/pet/${id}`}>
      <li className={styles.photoCard}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  );
};
export default Pet;
