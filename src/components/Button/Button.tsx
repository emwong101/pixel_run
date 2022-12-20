import React from "react";
import { motion } from "framer-motion";

interface props {
  content: string;
  classes: string;
}

function Button({ content, classes }: props) {
  return (
    <>
      <motion.button
        className={classes}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {content}
      </motion.button>
    </>
  );
}

export default Button;
