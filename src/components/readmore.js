import React from "react";

const OverlayComponent = ({ image, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <p>Overlay for {image}</p>
    </div>
  );
};

export default OverlayComponent;
