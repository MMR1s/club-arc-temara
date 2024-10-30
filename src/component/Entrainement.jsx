import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Core imports from Swiper
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import "../assets/css/Entrainement.css"; // Your custom styles

import { Navigation, Pagination } from "swiper/modules";

const entrainementData = [
  {
    id: 1,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 1",
    description: "Description for Entrainement 1",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 2",
    description: "Description for Entrainement 2",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 3",
    description: "Description for Entrainement 3",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 4",
    description: "Description for Entrainement 4",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 5",
    description: "Description for Entrainement 5",
  },
  {
    id: 6,
    imgSrc: "https://picsum.photos/150",
    title: "Entrainement 6",
    description: "Description for Entrainement 6",
  },
];

const Entrainement = ({ onCardClick }) => {
  return (
    <div className="entrainement-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          670: {
            slidesPerView: 3,
          },
        }}
      >
        {entrainementData.map((entrainement) => (
          <SwiperSlide key={entrainement.id}>
            <div
              className="entrainement-card"
              onClick={() => onCardClick(entrainement)}
            >
              <img src={entrainement.imgSrc} alt={entrainement.title} />
              <h2>{entrainement.title}</h2>
              <p>{entrainement.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Entrainement;
