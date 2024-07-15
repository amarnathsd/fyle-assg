import React, { useState } from "react";
import Hero from "../assets/images/hero.png";
import ContactUsPopup from "./contactuspopup";
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import Image4 from "../assets/images/1.png";
import Image5 from "../assets/images/2.png";
import Image6 from "../assets/images/3.png";

const LandingPage = () => {
  const [showContact, setShowContact] = useState(false);
  const [overlayImage, setOverlayImage] = useState(null);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  const handleClose = () => {
    setShowContact(false);
  };

  const showContactForm = () => {
    setShowContact(true);
  };

  const handleImageHover = (image) => {
    setOverlayImage(image);
  };

  const handleImageLeave = () => {
    setOverlayImage(null);
  };

  return (
    <div className="landing-page container-fluid">
      <div className="hero-section row d-flex justify-content-center">
        <div className="col-lg-6 col-12 ">
          <div>
            <h6 className="">Award winning</h6>
            <h2 className="mt-4">Digital Marketing Agency</h2>
            <p className="fw-normal mt-4">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
            <button className="contact-btn mt-4" onClick={showContactForm}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img className="hero-img" src={Hero} alt="hero"></img>
        </div>
      </div>
      <ContactUsPopup show={showContact} onClose={handleClose} />
      <div className="services mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <p className="color-red">WHAT WE DO</p>
            <h2 className="fw-bold">SERVICES PROVIDED FOR YOU</h2>
          </div>
          <div className="col-6 mt-5">
            <p>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
          </div>
          <div className="img-container d-flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="img-wrapper"
                onMouseEnter={() => handleImageHover(image)}
                onMouseLeave={handleImageLeave}
              >
                {overlayImage === image ? (
                  <div>
                    <h1>HI</h1>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
