import "./App.scss";
import GamePage from "./pages/gamePage/GamePage";
import InfoPage from "./pages/infoPage/InfoPage";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const [active, setActive] = useState(false);

  const handleClick = (e: any) => {
    setActive(true);
  };
  return (
    <>
      <div className="header-container" onClick={handleClick}>
        <img src="assets/title.png" alt="title" className="header" />
        <div className="button">
          <Link className="link" to={location.pathname === "/" ? "/play" : ""}>
            <motion.button
              className="link-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="button__text">
                {location.pathname === "/" ? "PLAY" : "HOME"}
              </p>
            </motion.button>
          </Link>
        </div>
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {active && <Route path="/" element={<InfoPage />} />}
            <Route path="/play" element={<GamePage />} />
            <Route path="/pixel_run" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;