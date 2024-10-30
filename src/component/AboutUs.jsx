import ".././assets/css/AboutUs.css";
export default function AboutUs() {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      {/* About Section */}
      <div className="about-section">
        <h2>ABOUT US</h2>
        <div className="about-info">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Risus interdum posuere
              blandit rhoncus tellus ultrices eget.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur vestibulum convallis ut.
              Sed integer pulvinar semper velit.
            </p>
          </div>
          <div className="about-image">
            {/* You can add an image or leave it as a design element */}
          </div>
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
}
