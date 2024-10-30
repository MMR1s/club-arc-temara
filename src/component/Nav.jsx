import React, { useState, useEffect } from "react";
import "../assets/css/Nav.css";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>
      {/* Optional nav links and dropdown */}
    </nav>
  );
}

export default Nav;
