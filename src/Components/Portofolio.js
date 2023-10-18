import "../Styles/Portofolio.scss";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Portofolio() {
  const popupVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


  const projects = [
    [
      "pink",
      "Project #1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      "https://www.google.com/"
    ],
    [
      "green",
      "Project #2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      "https://www.google.com/"
    ],
    [
      "blue",
      "Project #3",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      "https://www.google.com/"
    ],
    [
      "yellow",
      "Project #4",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      "https://www.google.com/"
    ],
    [
      "red",
      "Project #5",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      "https://www.google.com/"
    ],
  ];

  return (
    <section className="portofolio">
      <motion.div
        className="section-intro-wrapper"
        variants={popupVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once : true}}
      >
        <h1 className="section-title">My Work.</h1>
        <hr />
        <p>Just some of the things I built.</p>
      </motion.div>
      <AnimatePresence mode="wait">
        <div className="container">
          <motion.div className="wrapper"></motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
}
