import "../Styles/CV.scss";
import monocleFace from "../face-with-monocle_1f9d0.png";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CV() {
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

  const controls1 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [ref1, inView1]);

  const glowVariants = {
    noGlow: {
      color: "white",
      boxShadow: "0px 0px 0px 0px rgba(255,221,0,0.72)",
    },
    glow: {
      color: "white",
      boxShadow: "0px 0px 117px 52px rgba(255,221,0,0.72)",
    },
  };

  const glowControls = useAnimation();

  return (
    <motion.section
      animate={controls1}
      variants={popupVariants}
      initial="hidden"
      ref={ref1}
      className="resume"
    >
      <div className="section-intro-wrapper">
        <img src={monocleFace}></img>
        <hr />
        <p className="section-title">Read my résumé for more in-depth info.</p>
      </div>
      <motion.button
        onMouseEnter={() => {
          glowControls.start("glow");
        }}
        onMouseLeave={() => {
          glowControls.start("noGlow");
        }}
      >
        <i className="fi fi-rs-book-spells"></i>
        <motion.div
          className="glow-generator"
          variants={glowVariants}
          initial={"noGlow"}
          animate={glowControls}
        ></motion.div>
      </motion.button>
    </motion.section>
  );
}
