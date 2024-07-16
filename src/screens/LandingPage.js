import React, { useState } from "react";
import Hero from "../assets/images/hero.png";
import ContactUsPopup from "./contactuspopup";
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import Image4 from "../assets/images/1.png";
import Image5 from "../assets/images/2.png";
import Image6 from "../assets/images/3.png";
import Image7 from "../assets/images/4.svg";
import Image8 from "../assets/images/5.svg";
import Image9 from "../assets/images/6.svg";
import Image10 from "../assets/images/7.svg";
import Image11 from "../assets/images/image.png";
import Image12 from "../assets/images/heart (2).svg";
import Image13 from "../assets/images/clock (3).svg";
import Image14 from "../assets/images/Path 4402.svg";
import Image15 from "../assets/images/Path 4406.svg";
import Image16 from "../assets/images/Group 500.png";
const LandingPage = () => {
  const [showContact, setShowContact] = useState(false);
  // const [overlayImageIndex, setOverlayImageIndex] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(Image11);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const imageContents = [
    {
      title: "Clarified Vision & Target",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
      imageUrl: Image7,
    },
    {
      title: "High Performance",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
      imageUrl: Image8,
    },
    {
      title: "Maintain Security",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
      imageUrl: Image9,
    },
    {
      title: "Better Strategy & Quality",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
      imageUrl: Image10,
    },
  ];

  const growthstats = [
    {
      stats: "199 +",
      content: "Staticfied Customers",
      imageUrl: Image12,
    },
    {
      stats: "1591 +",
      content: "Days Of Operation",
      imageUrl: Image13,
    },
    {
      stats: "283 +",
      content: "Complete Project",
      imageUrl: Image14,
    },
    {
      stats: "75 +",
      content: "Win Awards",
      imageUrl: Image15,
    },
  ];

  const handleClose = () => {
    setShowContact(false);
  };

  const showContactForm = () => {
    setShowContact(true);
  };

  // const handleImageHover = (index) => {
  //   setOverlayImageIndex(index);
  //   console.log("hi i am here");
  // };

  // const handleImageLeave = () => {
  //   setOverlayImageIndex(-1);
  //   console.log("hi i am here");
  // };

  const handleCardHover = (image) => {
    setHoveredCard(image);
  };
  return (
    <div className="landing-page container-fluid">
      <div className="hero-section row d-flex justify-content-center">
        <div className="col-lg-6 col-12">
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
          <img className="hero-img" src={Hero} alt="hero" />
        </div>
      </div>
      <ContactUsPopup show={showContact} onClose={handleClose} />
      <div className="services container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-12">
            <p className="color-red">WHAT WE DO</p>
            <h2 className="fw-bold">SERVICES PROVIDED FOR YOU</h2>
          </div>
          <div className="col-lg-6 mt-lg-5">
            <p>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
          </div>
          <div className="img-container d-flex">
            {images.map((image, index) => (
              <img className="" src={image} alt={`image-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="heighlights mt-5">
        <h5 className="color-red">WHY CHOOSE US</h5>
        <h3>Why We are best</h3>
        <div className="heighlights-card mx-5 px-5">
          {imageContents.map((item, index) => (
            <div key={index} className="card1">
              <img src={item.imageUrl} alt="image1" />
              <p className="fw-bold">{item.title}</p>
              <p className="font align-left">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="projects mt-5">
        <h5 className="color-red">WHY CHOOSE US</h5>
        <h3>Why We are best</h3>
        <div className="row mt-5">
          <div className="col-lg-7 col-12 d-flex justify-content-end">
            <img src={hoveredCard} alt="Main" className=" main-image" />
          </div>
          <div className="col-lg-3">
            <div
              className="project-card p-3 text-start"
              onMouseEnter={() => handleCardHover(Image3)}
            >
              <h6 className="fw-bold">Genderless Kei – Japan’s Hot</h6>
              <p className="font">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
            <div
              className="project-card p-3 text-start"
              onMouseEnter={() => handleCardHover(Image11)}
            >
              <h6 className="fw-bold">Better Strategy & Quality</h6>
              <p className="font">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
            <div
              className="project-card p-3 text-start"
              onMouseEnter={() => handleCardHover(Image2)}
            >
              <h6 className="fw-bold">Genderless Kei – Japan’s Hot</h6>
              <p className="font">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="growth  mt-5">
        <h5 className="color-red">EXPERTS GROWTH</h5>
        <h3>OUR COMPANY GROWTH</h3>
        <div className="d-flex justify-content-center mt-5">
          {growthstats.map((item, index) => (
            <div className="">
              <div className="growth-card p-3" key={index} >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ height: "25px" }}
                />
                <h3>{item.stats}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="feedback mt-5">
        <h5 className="color-red">EXPERTS GROWTH</h5>
        <h3>OUR COMPANY GROWTH</h3>
        <p className="font text-center">
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </p>
        <p className="fw-lighte">
          <span className="color-red">JANNAT TUMPA</span>- COO, AMERIMAR
          ENTERPRISES, INC.
        </p>
      </div>
      <div className="footer d-flex justify-content-center align-items-center mt-5">
          <img className="w-75" src={Image16} alt="500"></img>
      </div>
    </div>
  );
};

export default LandingPage;
