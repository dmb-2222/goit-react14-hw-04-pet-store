import React from "react";
const SinglPet = ({pet}) => {
    const {image,name,age,breed,gender,color,description } = pet
  return (
    <>
    <h3>Имя: {name}</h3>
    <p>Возраст: {age}</p>
    <p>Порода: {breed}, Пол: {gender} , Цвет: {color} </p>
      <img src={image} alt={name}/>
      <h4>Описание</h4>
      <p>{description }</p>
    </>
  );
};
export default SinglPet;
