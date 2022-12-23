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
      <div className="iframe__container">
        <BlueBar
          classes="blue-bar__game"
          close="close__game"
          icon="close__icon--game"
        />
        <iframe
          className="game-frame"
          src="https://pixelrun-5a3ce.web.app/"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default GamePage;
