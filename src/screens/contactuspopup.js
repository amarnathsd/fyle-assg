import React, { useState } from "react";
import Close from "../assets/images/x.svg";

const ContactUsPopup = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    fetch("https://getform.io/f/bwngqdza", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
          });
          setIsChecked(false);
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      })
      .catch((error) => console.log(error));
  };

  if (!show) {
    return null;
  }

  return (
    <div className="conatct-popup position-fixed top-50 start-50 translate-middle bg-white border border-1 width-40">
      <div className="contact-box">
        <div className="d-flex justify-content-between">
          <h5 className="m-4">Talk to us</h5>
          <img className="m-3" src={Close} alt="close" onClick={onClose} />
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <div>
            <div className="row mt-3 px-4">
              <input
                className="col-11 border-0 border-bottom border-2 "
                type="email"
                name="email"
                placeholder="work email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row p-3 px-4">
              <input
                className="col-lg-5 col-11 mt-3 border-0 border-bottom border-2 "
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="col-lg-5 col-11 mt-3 border-0 border-bottom border-2 "
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="d-flex align-items-top px-3">
            <input
              className="mx-2 "
              type="checkbox"
              name="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
            />
            <label className="font align-left me-5">
              I agree to Fyle's terms and conditions, and provide consent to
              send me communication.
            </label>
          </div>
          <div className="d-flex justify-content-center p-2">
          <button className="contact-us mt-3 rounded p-2" type="submit" disabled={!isChecked}>
            Contact Us
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPopup;
