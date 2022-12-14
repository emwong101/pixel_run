import "./App.scss";
import GamePage from "./pages/gamePage/GamePage";
import InfoPage from "./pages/infoPage/InfoPage";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "./pages/contactInfo/Contact";

function App() {
  const location = useLocation();

  const [active, setActive] = useState(false);

  const handleClick = (e: any) => {
    setActive(true);
  };
  return (
    <>
      <div className="header-container">
        <img src="assets/title.png" alt="title" className="header" />
        <div className="button-container">
          <Link to="/pixel_run/contact">
            <img
              src="assets/phone-solid.svg"
              className="phone__icon"
              alt="phone"
            />
          </Link>
          <Link
            className="link"
            to={location.pathname === "/pixel_run/" ? "/pixel_run/play" : ""}
          >
            <motion.button
              className="link-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="button__text">
                {location.pathname === "/pixel_run/" ? "PLAY" : "HOME"}
              </p>
            </motion.button>
          </Link>
        </div>
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/pixel_run" element={<InfoPage />} />
            <Route path="/" element={<Navigate to="/pixel_run/" />} />
            <Route path="/pixel_run/play" element={<GamePage />} />
            <Route path="/pixel_run/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
