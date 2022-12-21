import "./GamePage.scss";
import { motion } from "framer-motion";
import BlueBar from "../../components/blueBar/BlueBar";

function GamePage() {
  return (
    <motion.div
      className="game-container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <BlueBar
        classes="blue-bar__game"
        close="close__game"
        icon="close__icon--game"
      />
      <iframe
        src="https://itch.io/embed-upload/6992900?color=c0c0c0"
        width="960"
        height="680"
      >
        <a href="https://emilywongg.itch.io/pixel-run">
          Play Pixel Run on itch.io
        </a>
      </iframe>
    </motion.div>
  );
}

export default GamePage;
