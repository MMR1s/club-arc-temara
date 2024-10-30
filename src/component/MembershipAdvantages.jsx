import React from "react";
import Slider from "react-slick"; // Import react-slick
import ".././assets/css/MembershipAdvantages.css";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        webkitTapHighlightColor: "black",
      }}
      onClick={onClick}
    />
  );
}

export default function MembershipAdvantages() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 913,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1, // Show 2 cards on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  // JSON array for membership benefits
  const membershipBenefits = [
    {
      id: 1,
      number: "01",
      title: "Perfecting Form",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
      link: "#",
    },

    {
      id: 2,
      number: "02",
      title: "Aiming Accuracy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
      link: "#",
    },

    {
      id: 3,
      number: "03",
      title: "Advanced Techniques",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
    },

    {
      id: 4,
      number: "04",
      title: "Perfecting Form",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
      link: "#",
    },

    {
      id: 5,
      number: "05",
      title: "Aiming Accuracy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
      link: "#",
    },

    {
      id: 6,
      number: "06",
      title: "Advanced Techniques",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum arcu donec aliquam.",
      link: "#",
    },
  ];

  return (
    <div className="membership-section">
      {" "}
      <section className="membership-benefits">
        {" "}
        <h2>Membership Benefits</h2>{" "}
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur. Nulla interdum posuere blandit
          mauris.{" "}
        </p>{" "}
        <Slider {...sliderSettings}>
          {" "}
          {membershipBenefits.map((benefit) => (
            <div className="benefit-card" key={benefit.id}>
              {" "}
              <h3> {benefit.number}</h3> <h4> {benefit.title}</h4>{" "}
              <p> {benefit.description}</p>
            </div>
          ))}
        </Slider>{" "}
      </section>{" "}
    </div>
  );
}
