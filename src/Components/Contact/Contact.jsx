import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import email_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";
import dark_btn from "../../assets/images/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact">
        <div class="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={email_icon} alt="" />
              Contact@BkDesigns.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +1 123-456-7890
            </li>
            <li>
              <img src={location_icon} alt="" />
              77 Massachusetts Ave, Cambridge
              <br /> MA 02139, United States
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email id"
              required
            />

            <label htmlFor="message">Write your messages here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="btn dark-btn submit-btn">
              Submit now <img src={dark_btn} alt="Submit Icon" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
