import "../Styles/Resume.scss";
import { motion } from "framer-motion";

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

  return (
    <motion.section className="resume">
      <motion.div className="resume-wrapper">
        <motion.div
          variants={popupVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once : true}}
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
