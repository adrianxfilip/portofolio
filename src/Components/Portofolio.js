import "../Styles/Portofolio.scss";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
  }, [ref1, ref2, inView1, inView2]);

  return (
    <section className="portofolio">
      <motion.div
        className="section-intro-wrapper"
        animate={controls1}
        variants={popupVariants}
        initial="hidden"
        ref={ref1}
      >
        <h1 className="section-title">My Work.</h1>
        <hr />
        <p>Just some of the things I built.</p>
      </motion.div>
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div className="wrapper">
            
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
