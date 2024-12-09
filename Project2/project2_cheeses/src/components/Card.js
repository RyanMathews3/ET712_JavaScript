import React from "react";



const Card = ({ title, image, description, onOpenModal }) => {

  return (

    <div className="card" onClick={onOpenModal}>

      <img src={image} alt={title} />

      <h3>{title}</h3>

    </div>

  );

};



export default Card;

