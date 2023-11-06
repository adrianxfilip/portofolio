import "../Styles/AboutMe.scss";
import { motion } from "framer-motion";

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
        duration: .5,
      },
    },
  };


  return (
    <section className="about-me">
      <motion.div
        className="section-intro-wrapper"
        variants={popupVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once : true}}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit in tellus vel vulputate. Vivamus vitae molestie ante. Mauris
            consectetur orci elementum eros lobortis egestas.
            <br />
            <br />
            Nunc eu sapien condimentum, ultricies tellus eu, egestas magna.
            Suspendisse eget neque pharetra, condimentum odio eu, scelerisque
            lacus. Donec porttitor euismod mi, at tincidunt turpis lobortis in.
            Nulla tincidunt sem at eros sagittis sodales
            <br />
            <br />
            Maecenas hendrerit ex ex, at rutrum neque aliquet eu. Fusce eros
            nisl, malesuada vel risus sit amet, tempus pulvinar elit. Aenean
            ultricies, nisl et faucibus volutpat, neque turpis consequat eros.
          </p>
        </motion.div>
        <motion.div
          className="wrapper skills-wrapper"
          variants={popupVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once : true}}
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
