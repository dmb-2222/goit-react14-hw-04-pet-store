import React from "react";
import Pet from "../components/pets/Pet/Pet";
import pets from "../pets.json";
import styles from "../components/style.module.css";

const PetsPage = () => {

  return (
    <>
      <h2 className={styles.gallery}>Выбирете питомца</h2>
      <ul className={styles.gallery}>
        {pets.map(pet => (
          <Pet
            key={pet.id}
            {...pet}
          />
        ))}
      </ul>
    </>
  );
};
export default PetsPage;
