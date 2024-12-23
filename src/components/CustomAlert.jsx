import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <span className="alert-message">{message}</span>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default CustomAlert;
