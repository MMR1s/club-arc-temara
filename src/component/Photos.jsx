import React from "react"; // Ensure React is imported
import "../assets/css/Photos.css";

export const Photos = ({ close }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      close();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="photo-section">
        <button className="close-button" onClick={close}>
          ✕
        </button>
        {/* <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" />
        <img src="https://picsum.photos/500/200" alt="" /> */}
        <p>Nothing inside</p>
      </div>
    </div>
  );
};
