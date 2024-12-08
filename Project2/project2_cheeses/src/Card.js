import React from 'react';



function Card({ image, title, onLearnMore }) {

  return (

    <div className="card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <button onClick={onLearnMore}>Learn More</button>

    </div>

  );

}



export default Card;

