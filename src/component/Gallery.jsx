import React, { useState } from "react";
import ".././assets/css/Gallery.css";
import { Photos } from "./Photos"; // Import the Photos component

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isOpen, setIsOpen] = useState(false); // State to control pop-up visibility
  const [viewMore, setViewMore] = useState(false); // State to control rendering of Photos

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true); // Open the pop-up
  };

  const handleClose = () => {
    setIsOpen(false); // Close the pop-up
    setSelectedImage(null); // Clear the selected image
  };

  const handleViewMoreClick = () => {
    setViewMore(true); // Show Photos component when "View more" is clicked
  };

  const handleCloseViewMoreClick = () => {
    setViewMore(false); // Close Photos component
  };

  return (
    <>
      {/* About Section */}
      <div className="gallery-section">
        <div className="gallery-main">
          <div className="gallery-info">
            <div className="gallery-text">
              <h2>GALLERY</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus interdum posuere
                blandit rhoncus tellus ultrices eget.
              </p>
            </div>
            <button onClick={handleViewMoreClick}>View more</button>
          </div>
        </div>

        {viewMore && <Photos close={handleCloseViewMoreClick} />}

        <div className="all-groups">
          <div className="gallery-images" style={{ "--t": "20s" }}>
            {/* Gallery Images */}
            <div aria-hidden className="group-1">
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/200")
                }
              >
                <img src="https://picsum.photos/500/200" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/201")
                }
              >
                <img src="https://picsum.photos/500/201" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/202")
                }
              >
                <img src="https://picsum.photos/500/202" alt="" />
              </div>
            </div>
            <div aria-hidden className="group-1">
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/203")
                }
              >
                <img src="https://picsum.photos/500/203" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/204")
                }
              >
                <img src="https://picsum.photos/500/204" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/205")
                }
              >
                <img src="https://picsum.photos/500/205" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-images" style={{ "--t": "20s" }}>
            <div aria-hidden className="group-2">
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/206")
                }
              >
                <img src="https://picsum.photos/500/206" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/207")
                }
              >
                <img src="https://picsum.photos/500/207" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/208")
                }
              >
                <img src="https://picsum.photos/500/208" alt="" />
              </div>
            </div>
            <div aria-hidden className="group-2">
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/209")
                }
              >
                <img src="https://picsum.photos/500/209" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/210")
                }
              >
                <img src="https://picsum.photos/500/210" alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleImageClick("https://picsum.photos/500/211")
                }
              >
                <img src="https://picsum.photos/500/211" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Image */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <img src={selectedImage} alt="" className="popup-image" />
        </div>
      )}
    </>
  );
}
