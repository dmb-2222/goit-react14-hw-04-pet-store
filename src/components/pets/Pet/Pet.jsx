import React from "react";
import styles from "../../style.module.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
