import React from "react";

const PopupImage = ({ imageUrl, title, onClose }) => {
  return (
    <div className="popup-image">
      <div className="popup-content">
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupImage;
