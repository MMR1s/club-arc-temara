import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Core imports from Swiper
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import "../assets/css/Activities.css"; // Your custom styles

import { Navigation, Pagination } from "swiper/modules";

const Activities = ({ onCardClick }) => {
  const activitiesData = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 1",
      description: "Description for Activity 1",
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 2",
      description: "Description for Activity 2",
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 3",
      description: "Description for Activity 3",
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 4",
      description: "Description for Activity 4",
    },
    {
      id: 5,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 5",
      description: "Description for Activity 5",
    },
    {
      id: 6,
      imgSrc: "https://picsum.photos/150",
      title: "Activity 6",
      description: "Description for Activity 6",
    },
  ];
  return (
    <div className="activities-container">
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
        {activitiesData.map((activity) => (
          <SwiperSlide key={activity.id}>
            <div
              className="activities-card"
              onClick={() => onCardClick(activity)}
            >
              <img src={activity.imgSrc} alt={activity.title} />
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Activities;
