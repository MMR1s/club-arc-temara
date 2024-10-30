import React, { useState, useRef, useEffect } from "react";
import Activities from "./Activities.jsx";
import Entrainement from "./Entrainement.jsx";
import "../assets/css/ActivitiesEntrainement.css";
import ActivitiesEntrainementBg from "../assets/video/activitiesEntrainementBg.mp4";

export default function ActivitiesEntrainement() {
  const [activeComponent, setActiveComponent] = useState("activities");
  const [activeItem, setActiveItem] = useState(null);
  const modalRef = useRef();

  const handleChange = (component) => setActiveComponent(component);
  const closeModal = () => setActiveItem(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target))
        closeModal();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderComponent = () => {
    const Component =
      activeComponent === "activities" ? Activities : Entrainement;
    return <Component onCardClick={(item) => setActiveItem(item)} />;
  };

  return (
    <section className="ActivitiesEntrainement-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="ActivitiesEntrainement-video"
        aria-hidden="true"
      >
        <source src={ActivitiesEntrainementBg} type="video/mp4" />
      </video>
      <div className="component-display">
        <nav className="button-container">
          <button
            onClick={() => handleChange("activities")}
            className={`toggle-button ${
              activeComponent === "activities" ? "active" : ""
            }`}
          >
            Activities
          </button>
          <button
            onClick={() => handleChange("entrainement")}
            className={`toggle-button ${
              activeComponent === "entrainement" ? "active" : ""
            }`}
          >
            Entrainement
          </button>
        </nav>
        {renderComponent()}
      </div>

      {activeItem && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h5>{activeItem.id}</h5>
            <img src={activeItem.imgSrc} alt={activeItem.title} />
            <h2>{activeItem.title}</h2>
            <p>{activeItem.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
