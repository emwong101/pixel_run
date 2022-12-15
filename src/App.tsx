import "./App.scss";
import GamePage from "./pages/gamePage/GamePage";
import InfoPage from "./pages/infoPage/InfoPage";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="header-container">
        <img src="pixel_run/assets/title.png" alt="title" className="header" />
        <div className="button">
          <motion.button
            className="link-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="link"
              to={location.pathname === "/" ? "/play" : ""}
            >
              {location.pathname === "/" ? "PLAY" : "HOME"}
            </Link>
          </motion.button>
        </div>
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/pixel-run" />} />
            <Route path="/play" element={<GamePage />} />
            <Route path="/pixel_run" element={<InfoPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
