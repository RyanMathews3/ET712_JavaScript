import React from "react";

const ModalWindow = ({ title, image, description, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <img src={image} alt={title} className="modal-image" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ModalWindow;



