import React, { useState } from "react";
import "./Consultation.css";
import girlImg from "../../assets/images/girl1.webp";

import arrowDown from "../../assets/images/arrow.png";

const Consultation = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91827e4f-114b-42ec-aaf6-84256807078f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setIsSuccess(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSuccess(true);
    }
  };
  return (
    <>
      <div className="contact container">
        <div className="contact-col section-xl-100">
          <h3>Free Consultation</h3>
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>
            <div className="input-box">
              {" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <div class="custom-select-wrapper">
                <select id="service" name="service" required>
                  <option value="">Family Law</option>
                  <option value="consultation">Business Law</option>
                  <option value="development">Civil Litigation</option>
                </select>
              </div>
            </div>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="submit-btnC">
              Request a Free Consultation
            </button>
          </form>
          <span style={{ color: isSuccess ? "green" : "red" }}>{result}</span>
        </div>

        <div class="contact-col">
          <div className="imgbox">
            <img src={girlImg} alt="girlImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
