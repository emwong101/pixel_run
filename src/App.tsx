import "./App.scss";
import GamePage from "./pages/gamePage/GamePage";
import InfoPage from "./pages/infoPage/InfoPage";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="header-container">
        <img src="/assets/title.png" alt="title" className="header" />
        <div className="button">
          <motion.button
            className="link-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link className="link" to="/play">
              PLAY
            </Link>
          </motion.button>
        </div>
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<InfoPage />} />
            <Route path="play" element={<GamePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
