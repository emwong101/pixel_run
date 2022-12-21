import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import BlueBar from "../../components/blueBar/BlueBar";

function Contact() {
  return (
    <div className="contact__page">
      <motion.div
        className="contact"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <BlueBar classes="" close="" icon="" />
        <div className="about__wrapper">
          <div className="about__symbol contact__symbol">
            <img
              className="caution contact__caution"
              alt="caution symbol"
              src="assets/caution.png"
            ></img>
          </div>
          <div className="about__text-div">
            <a
              target="_blank"
              href="https://emilywongg.itch.io/pixel-run"
              className="contact__link"
            >
              https://emilywongg.itch.io/pixel-run
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/emily-pyw-wong/"
              className="contact__link"
            >
              https://www.linkedin.com/in/emily-pyw-wong/
            </a>
            <a
              target="_blank"
              href="https://github.com/emwong101"
              className="contact__link"
            >
              https://github.com/emwong101
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
