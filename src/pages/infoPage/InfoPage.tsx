import "./InfoPage.scss";
import Close from "/assets/close.svg";

import { motion } from "framer-motion";
import BlueBar from "../../components/blueBar/BlueBar";

function InfoPage() {
  let text = `${(<span className="button__outline">OK</span>)}`;
  return (
    <>
      <motion.div
        className="main"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <BlueBar classes="" close="" icon="" />
        <h2 className="info__tagline">
          Pixel Run is an arcade style, endless sidescroller inspired by
          traditional HTML browser games.
        </h2>
        <motion.button
          className="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="button__outline">OK</span>
        </motion.button>
      </motion.div>
      <motion.div
        className="main second"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 1.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <BlueBar classes="" close="" icon="" />
        <div className="about__wrapper">
          <div className="about__symbol">
            <img
              className="caution"
              alt="caution symbol"
              src="assets/caution.png"
            ></img>
          </div>
          <div className="about__text-div">
            <h2 className="about">About Me</h2>
            <ul className="about__list">
              <li className="about__body">
                Former Legal Assistant and Policy Researcher, passionate about
                accessibility and innovation
              </li>
              <li className="about__body">
                Built a game to test my JavaScript proficiency, but ended up
                learning and using Typescript instead
              </li>
              <li className="about__body">
                Game is available in beta, multiplayer and performance
                improvements will be applied before formal website deployment
              </li>
              <li className="about__body">
                Assets found on <a href="opengameart.org">opengameart.org</a> or
                original designs
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="main third"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 2.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <BlueBar classes="" close="" icon="" />
        <h2 className="info__tagline">
          The game was built using Phaser JS v.3, Typescript, Javascript, Axios,
          React, Framer Motion, Firebase, and MatterJS.
        </h2>
        <div>
          <img src="assets/typescript.svg" alt="typescript" className="logo" />
          <img src="assets/javascript.png" alt="" className="logo" />
          <img src="assets/phaser.png" alt="" className="logo" />
          <img src="assets/react.png" alt="" className="logo" />
          <img src="assets/matterjs.png" alt="" className="logo" />
          <img src="assets/framer.png" className="logo" />
        </div>
      </motion.div>
    </>
  );
}

export default InfoPage;
