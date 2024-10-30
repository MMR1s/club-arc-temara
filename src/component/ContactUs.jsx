import React, { useState } from "react";
import "../assets/css/ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    trainingPlan: "", // Updated state for training plan selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOptionClick = (option) => {
    setFormData((prevData) => ({ ...prevData, trainingPlan: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Talk With Us</h2>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and
            we'll be in touch shortly.
          </p>
          <div className="info-details">
            <p>
              <i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <p>
              <i className="fas fa-phone"></i> +212-6-0000-0000
            </p>
            <p>
              <i className="fas fa-envelope"></i> contact@lorem.com
            </p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            {/* Training Plan Button Group */}
            <div className="button-group">
              {/* Training Plan Label */}
              <label className="training-plan-label">Training Plan:</label>
              <div>
                <div
                  className={`option-button ${
                    formData.trainingPlan === "leisure" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("leisure")}
                >
                  Leisure
                </div>
                <div
                  className={`option-button ${
                    formData.trainingPlan === "professional" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("professional")}
                >
                  Professional
                </div>
              </div>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
