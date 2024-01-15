import { useRef } from "react";
import "../Styles/AboutMe.scss";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "SASS",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Socket.IO",
    "Framer Motion",
    "GIT",
    "Photoshop (basics)",
  ];

  const popupVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .4,
        delay: .3
      },
    },
  };

  const ref = useRef(null)
  const isInView = useInView(
    ref,
    {
      once : true,
      amount : 1
    }
  );

  return (
    <section className="about-me" id="about-me">
      <motion.div
        className="section-intro-wrapper"
        variants={popupVariants}
        initial="hidden"
        ref={ref} animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="section-title">About me.</h1>
        <hr />
        <p>Get to know a little about me and my skills.</p>
      </motion.div>
      <div className="container">
        <motion.div
          className="wrapper"
          variants={popupVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once : true}}
        >
          <h2>Who am I?</h2>
          <p>
          Hello there! I'm Adrian, a passionate and innovative web developer dedicated to crafting clean and functional websites. 
          With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into reality through code.
            <br />
            <br />
            I'm fascinated by the endless possibilities that web development offers. 
            From creating seamless user experiences to solving complex problems through coding, every project is an exciting challenge for me. 
            I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            <br />
            <br />
            I'm always open to new opportunities, collaborations, and interesting projects. 
            Feel free to <u><a href="mailto:adrianxfilip@gmail.com">reach out</a></u> if you have an exciting idea or if you just want to connect.
          </p>
        </motion.div>
        <motion.div
          className="wrapper skills-wrapper"
          variants={popupVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once : true, threshold: 1}}
        >
          <h2>My Skills.</h2>
          {skills.map((skill, index) => (
            <p className="skill" key={"skill" + index}>
              {skill}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
