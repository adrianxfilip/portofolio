import "../Styles/Landing.scss";
import { AnimatePresence, motion, stagger } from "framer-motion";
import winkingFace from "../winking-face_1f609.png";
import robot from "../robot_1f916.png";
import beamingFace from "../beaming-face-with-smiling-eyes_1f601.png";
import salutingFace from "../saluting-face_1fae1.png";
import smilingFace from "../smiling-face-with-hearts_1f970.png";
import thinkingFace from "../thinking-face_1f914.png";
import cloudFace from "../face-in-clouds_1f636-200d-1f32b-fe0f.png";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Landing({ isLoaded }) {
  const texts = [
    ["A web developer.", robot],
    ["An all-round awesome person.", salutingFace],
    ["I love building stuff.", smilingFace],
    ["Check out my portofolio.", beamingFace],
    ["You know I'm what you're looking for.", winkingFace],
    ["I don't know what else I could write.", thinkingFace],
    ["I really hope these emojis aren't copyrighted.", cloudFace],
  ];

  const [textNumber, setNumber] = useState(0);

  const [renderText, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (textNumber < 6) {
        setNumber(textNumber + 1);
      } else {
        setNumber(0);
      }
    }, 3000);
  }, [textNumber]);

  return isLoaded ? (
    <section className="landing">
      <motion.div className="text-container">
        <p>Hey,</p>
        <p>
          I'm <span>Adrian.</span>
        </p>
        <motion.div className="wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                y: "100px",
                opacity: 0,
              }}
              animate={{
                y: "0",
                opacity: 1,
                transition: { duration: 0.3, type: "spring" },
              }}
              exit={{
                y: "-20px",
                opacity: 0,
                transition: {
                  duration: 0.4,
                  type: "spring",
                },
              }}
              key={textNumber}
            >
              <p>{texts[textNumber][0]}</p>
              <img src={texts[textNumber][1]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  ) : (
    <Logo />
  );
}
