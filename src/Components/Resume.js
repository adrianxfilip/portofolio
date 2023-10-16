import "../Styles/Resume.scss";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
        duration: 0.5,
      },
    },
  };

  const controls1 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [ref1, inView1, controls1]);

  return (
    <motion.section className="resume">
      <motion.div className="resume-wrapper">
        <motion.div
          animate={controls1}
          variants={popupVariants}
          initial="hidden"
          ref={ref1}
        >
          <p className="section-title">
            Read my résumé for more in-depth info.
          </p>
          <button>Résumé</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
