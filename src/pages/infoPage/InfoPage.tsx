import "./InfoPage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TS from "/assets/typescript.svg";
import JS from "/assets/javascript.png";
import Phaser from "/assets/phaser.png";
import matterjs from "/assets/matterjs.png";
import react from "/assets/react.png";
import framer from "/assets/framer.png";

function InfoPage() {
  return (
    <>
      <motion.div
        className="main"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="blue-bar">
          {" "}
          <p className="bar__label">Pixel Run</p>
          <input type="button" value="X" className="close"></input>
        </div>
        <h2 className="info__tagline">
          Pixel Run is an arcade style, endless sidescroller inspired by
          traditional HTML browser games.
        </h2>
      </motion.div>
      <motion.div
        className="main second"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 1.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="blue-bar">
          <p className="bar__label">Pixel Run</p>
          <input type="button" value="X" className="close"></input>
        </div>
        <h2 className="about">About Me</h2>
        <h4 className="about__body">
          I am a former legal assistant and policy researcher. After spending a
          little over a year within the legal industry, I decided I needed
          something more fast paced and modern. Web development highly appealed
          to me due to the industry's focus on accessible design/functionality,
          on top of constant innovation. I chose to design a game for my
          capstone as a way of exploring different areas of the tech industry,
          and to challenge my own proficiency in Javascript. Ironically, I ended
          up learning Typescript in order to build my project as TS works better
          with Phaser's class based nature. Before formal deployment, I hope to
          add multiplayer functionality and improve upon the object generation
          algorithim within the game. All the assets used within the game are
          either open sourced artwork (which can be found
          <a href="https://opengameart.org/"> here</a>) or original designs.
        </h4>
      </motion.div>
      <motion.div
        className="main third"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 2.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="blue-bar">
          {" "}
          <p className="bar__label">Pixel Run</p>
          <input type="button" value="X" className="close"></input>
        </div>
        <h2 className="info__tagline">
          The game was built using Phaser JS v.3, Typescript, Javascript, Axios,
          React, Framer Motion, Firebase, and MatterJS.
        </h2>
        <div>
          <img src={TS} alt="typescript" className="logo" />
          <img src={JS} alt="" className="logo" />
          <img src={Phaser} alt="" className="logo" />
          <img src={react} alt="" className="logo" />
          <img src={matterjs} alt="" className="logo" />
          <img src={framer} className="logo" />
        </div>
      </motion.div>
    </>
  );
}

export default InfoPage;
