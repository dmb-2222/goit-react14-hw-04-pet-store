import React from "react";
import pets from "../pets.json";
import SinglPet from '../pets/SinglPet/SinglPet'
// import styles from '../style.module.css'

const getIdProps = props => props.match.params.petId;

const PetPage = props => {
    const propId = getIdProps(props);
  return (
    <>
      <h2>Информация и питомце</h2>
      <SinglPet pet={pets.find(pet => propId === pet.id)}/>
    </>
  );
};
export default PetPage;
