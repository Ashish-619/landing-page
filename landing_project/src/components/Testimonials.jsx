import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Say</h1>
        <p className="primary-text">
          Thrilled customers share their experiences! Read testimonials about
          our outstanding services, exceptional products, and unparalleled
          customer satisfaction. Discover what makes us the preferred choice for
          countless happy clients.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Savor the convenience! Delicious meals delivered right to my doorstep,
          prompt service, and a diverse menu. My go-to for satisfying cravings
          without the hassle. A culinary journey that keeps me coming back for
          more!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
