import ".././assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <i className="fas fa-phone"></i> +212 600-000-0000
          </p>
          <p>
            <i className="fas fa-envelope"></i> anonyme@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Temara-Sekhirate, Maroc,
            Afrique
          </p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Team</li>
            <li>Pricing Plan</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Archery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Feugiat nibh urna adipiscing
            vulputate eleifend nunc.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 - All Rights Reserved | Created By{" "}
          <a href="gmail:" style={{ color: "white" }}>
            reddadrayane.m@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
