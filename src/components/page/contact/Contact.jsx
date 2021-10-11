import { useState } from "react";
import Input from "react-phone-number-input/input";
import "./contact.css";

export default function Contact() {
  const [mobile, setMobile] = useState("");
  // validate value

  return (
    <div className="contact">
      <div className="contactTitle">
        <span className="contactTitleSm">Contact</span>
        <span className="contactTitleLg">Me</span>
      </div>
      <img
        className="contactImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="contactInfo">
        <p className="contactDesc">
          While we're good with smoke signals, there are simpler ways for us to
          get in touch and answer your questions. Our service team are here
          Monday to Friday, 9am to 5pm GMT and will get back to you as soon as
          they can.
        </p>
        <br></br>
        <div className="contactNumber">
          <span>
            Please call us on:<b> +0808 11697080</b>
          </span>
        </div>
        <form className="contactForm">
          <label>Name</label>
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <label>Email</label>
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your email..."
            required
          />
          <label>Phone Number</label>
          <Input
            className="contactInput"
            placeholder="Enter your phone number..."
            required
            value={mobile}
            onChange={setMobile}
          />

          <label>Massage</label>
          <textarea
            className="contactInput"
            type="text-area"
            placeholder="Tell your massage..."
            required
          />
          <button type="submit" className="contactButton">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
