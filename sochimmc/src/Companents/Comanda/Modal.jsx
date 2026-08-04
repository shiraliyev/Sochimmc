import React from 'react';
import './Comanda.css';

function Modal({ data, closeModal }) {
  return (
    <div id="modal" className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 id="modal-name">{data.name}</h2>
        <p id="modal-title">{data.title}</p>
        <p id="modal-description">{data.description}</p>
      </div>
    </div>
  );
}

export default Modal;
