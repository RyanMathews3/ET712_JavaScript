import React from 'react';



function ModalWindow({ title, image, description, onClose }) {

  return (

    <div className="ModalWindow">

      <div className="modal-content">

        <h2>{title}</h2>

        <img src={image} alt={title} />

        <p>{description}</p>

        <button onClick={onClose}>Close</button>

      </div>

    </div>

  );

}