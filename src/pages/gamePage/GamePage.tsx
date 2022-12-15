import "./GamePage.scss";
import { motion } from "framer-motion";

function GamePage() {
  return (
    <motion.div
      className="game-container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.8 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <div className="blue-bar blue-bar__game">
        <p className="bar__label">Pixel Run</p>
        <input type="button" value="X" className="close close__game"></input>
      </div>
      <iframe
        className="game"
        src="https://itch.io/embed-upload/6992900?color=c0c0c0"
        width="960"
        height="680"
      >
        <a href="https://emilywongg.itch.io/pixel-runner">
          Play Pixel Runner on itch.io
        </a>
      </iframe>
    </motion.div>
  );
}

export default GamePage;
