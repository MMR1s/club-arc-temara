import React, { useState } from "react";
import ".././assets/css/MainComp.css";
import MainVid from ".././assets/video/mainVid.mp4";
import GetToKnowMore from "./GetToKnowMore";

export default function MainPage() {
  const [showGetToKnowMore, setShowGetToKnowMore] = useState(false);

  const handleButtonClick = () => {
    setShowGetToKnowMore(true);
  };

  const handleClose = () => {
    setShowGetToKnowMore(false);
  };

  return (
    <div className="archery-container">
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={MainVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <div className="hero-text">
            <h1>WELCOME TO ARCHERY ABDO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet pellentesque risus
              sollicitudin parturient suspendisse ut.
            </p>
            <button onClick={handleButtonClick}>Get To Know Us More</button>
          </div>
        </div>
        <div className="flesh-Bottom"></div>
      </div>

      {/* Conditionally render GetToKnowMore component */}
      {showGetToKnowMore && <GetToKnowMore onClose={handleClose} />}
    </div>
  );
}
