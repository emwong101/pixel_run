import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";

function Contact() {
  return (
    <div>
      <motion.div
        className="contact"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="blue-bar">
          <p className="bar__label">Pixel Run</p>
          <input type="button" value="X" className="close"></input>
        </div>
        <div className="about__wrapper">
          <div className="about__symbol contact__symbol">
            <img
              className="caution"
              alt="caution symbol"
              src="assets/caution.png"
            ></img>
          </div>
          <div className="about__text-div">
            <h5 className="contact__link">
              https://emilywongg.itch.io/pixel-run
            </h5>

            <h5 className="contact__link">
              https://www.linkedin.com/in/emily-pyw-wong/
            </h5>
            <h5 className="contact__link">https://github.com/emwong101</h5>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
