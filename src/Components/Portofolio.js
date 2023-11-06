import "../Styles/Portofolio.scss";
import {
  useAnimation,
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import coinflip from "../coinflip.png";
import getaticket from "../getaticket.png";
import lovelycats from "../lovelycats.png";
import codepen from "../Codepen.png";
import replit from "../Replit.jpg";

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
    {
      img: coinflip,
      name: "Coin Flipping Game",
      description:
        "A casino style coin flipping game developed with the goal of getting experience on working with websockets, namely Socket.IO.",
      url: "https://adrianxfilip.github.io/coinflip-client/",
    },
    {
      img: getaticket,
      name: "Lottery Website",
      description:
        "Abandoned projects developed for a friend. Project was ultimatelly not launched, but was a good challenge and opportunity to improve my both frontend and backend development skills.",
      url: "https://adrianxfilip.github.io/getaticket/",
    },
    {
      img: lovelycats,
      name: "LovelyCatsNFT",
      description:
        "Landing page developed for an NFT collection centered around cats.",
      url: "https://lovelycatsnft.com/",
    },
    {
      img: replit,
      name: "Replit Projects",
      description:
        "Various projects required for earning my Backend Development certification from freeCodeCamp.",
      url: "https://replit.com/@AdrianFilip",
    },
    {
      img: codepen,
      name: "CodePen Projects",
      description:
        "Various projects required for earning my Frontend Development certifications from freeCodeCamp.",
      url: "https://codepen.io/adrianfilip663/pens/public",
    },
  ];

  const [currentProject, setProject] = useState(0);

  const handleSwipe = (swipeDirection) => {
    if (swipeDirection === "left") {
      if (currentProject == projects.length - 1) {
        setProject(0);
      } else {
        setProject(currentProject + 1);
      }
      dragControls.start("right");
    }
    if (swipeDirection === "right") {
      if (currentProject === 0) {
        setProject(projects.length - 1);
      } else {
        setProject(currentProject - 1);
      }
      dragControls.start("left");
    }
  };

  const handleClick = (index) => {
    if (index > currentProject) {
      setProject(index);
      dragControls.start("left");
    }
    if (index < currentProject) {
      setProject(index);
      dragControls.start("right");
    }
  };

  const x = useMotionValue(0);

  const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]);

  const dragVariants = {
    left: {
      x: [-500, 0],
      transition: {
        duration: 0.4,
      },
    },
    right: {
      x: [500, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  const dragControls = useAnimation();

  return (
    <section className="portofolio">
      <motion.div
        className="section-intro-wrapper"
        variants={popupVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <h1 className="section-title">My Work.</h1>
        <hr />
        <p>Just some of the things I built.</p>
      </motion.div>
      <AnimatePresence mode="wait">
        <div className="container">
          <motion.div
            style={{ x, opacity: opacity }}
            className="wrapper"
            drag="x"
            variants={dragVariants}
            animate={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -400) {
                handleSwipe("left");
              }
              if (info.offset.x > 400) {
                handleSwipe("right");
              }
            }}
            key={currentProject}
          >
            <img src={projects[currentProject].img} />
            <div className="project-info">
              <h2>{projects[currentProject].name}</h2>
              <p>{projects[currentProject].description}</p>
              <a href={projects[currentProject].url} target="_blank">
                View Project
              </a>
            </div>
          </motion.div>
          <div className="counter-wrapper">
            {projects.map((project, index) => (
              <hr
                key={index}
                className={index === currentProject ? "line active" : "line"}
                onClick={() => {
                  handleClick(index);
                }}
              />
            ))}
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}
