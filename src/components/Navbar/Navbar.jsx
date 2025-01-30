import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img src="https://ik.imagekit.io/jncw2kb8u/LOGO.png?updatedAt=1738224610877" />
      <div className="Pages">
        <div className="p1"> <h3>Home</h3></div>
        <div className="p2"><h3>About Us</h3></div>
        <div className="p3"><h3>Services</h3></div>
        <div className="p4"><h3>Blog</h3></div>
        <div className="p5"><h3>Contact Us</h3></div>
      </div>
      <button className="contact" type="phone">+91-8968881110</button>
    </div>
  );
}

export default Navbar;
