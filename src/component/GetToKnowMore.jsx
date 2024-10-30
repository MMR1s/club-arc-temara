import React from "react";
import ".././assets/css/GetToKnowMore.css";

export default function GetToKnowMore({ onClose }) {
  const handleContainerClick = (e) => {
    if (e.target.classList.contains("gtkm-container")) {
      onClose();
    }
  };

  return (
    <div className="gtkm-container" onClick={handleContainerClick}>
      <div className="gtkm-content">
        <button className="gtkm-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="gtkm-section gtkm-section-1">
          <h2 className="gtkm-header">Header 1</h2>
          <p className="gtkm-description">
            This is the description for the first section. It provides some
            information about the content in this part.
          </p>
        </div>
        <div className="gtkm-section gtkm-section-2">
          <h2 className="gtkm-header">Header 2</h2>
          <p className="gtkm-description">
            This is the description for the second section. It gives a brief
            explanation about what can be found here.
          </p>
        </div>
        <div className="gtkm-section gtkm-section-3">
          <h2 className="gtkm-header">Header 3</h2>
          <p className="gtkm-description">
            This is the description for the third section. It highlights the
            main details about this part of the page.
          </p>
        </div>
      </div>
    </div>
  );
}
