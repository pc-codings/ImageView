import React, { useState } from "react";


const Card = ({ image }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="card">
      <img
        key={image.id}
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        alt={image.title}
        onClick={openPopup}
        className={`image ${imageLoaded ? "" : "shimmer"}`}
        onLoad={handleImageLoad}
      />
      <h2 className="title">{image.title}</h2>

      {showPopup && (
        <div className="image-popup">
          <div className="popup-content">
            <img
              src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
              alt={image.title}
            />
            <p>{image.title}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
