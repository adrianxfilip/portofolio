import { useEffect, useRef } from "react";
import "../Styles/Resume.scss";
import { motion, useInView } from "framer-motion";

export default function Resume() {
  const popupVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: .3
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(
    ref,
    {
      once : true,
      amount : 1
    }
  );

  return (
    <motion.section className="resume" id="resume">
      <motion.div className="resume-wrapper">
        <motion.div ref={ref} variants={popupVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <p className="section-title">
            Read my résumé for more in-depth info.
          </p>
          <a
            href={require("../CV_Filip_Adrian.pdf")}
            download="CV-Filip-Adrian"
          >
            <button>Résumé</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
