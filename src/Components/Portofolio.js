import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import "../Styles/Portofolio.scss";
import {
  useAnimation,
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

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
      color: "pink",
      name: "Project #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      url: "https://www.google.com/",
    },
    {
      color: "red",
      name: "Project #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      url: "https://www.google.com/",
    },
    {
      color: "yellow",
      name: "Project #3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      url: "https://www.google.com/",
    },
    {
      color: "green",
      name: "Project #4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      url: "https://www.google.com/",
    },
    {
      color: "blue",
      name: "Project #5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris consectetur orci elementum eros lobortis egestas.",
      url: "https://www.google.com/",
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
      transition : {
        duration: .4
      }
    },
    right: {
      x: [500, 0],
      transition : {
        duration: .4
      }
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
            <div
              className="img-placeholder"
              style={{ backgroundColor: projects[currentProject].color }}
            ></div>
            <div className="project-info">
              <h2>{projects[currentProject].name}</h2>
              <p>{projects[currentProject].description}</p>
              <a href={projects[currentProject].url}>View Project</a>
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
