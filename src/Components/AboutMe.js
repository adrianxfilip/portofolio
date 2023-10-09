import "../Styles/AboutMe.scss";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "SASS",
    "NodeJS",
    "Express.JS",
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

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
    if (inView3) {
      controls3.start("visible");
    }
  }, [ref1, ref2, ref3, inView1, inView2, inView3]);

  return (
    <section className="about-me">
      <motion.div
        className="section-intro-wrapper"
        animate={controls1}
        variants={popupVariants}
        initial="hidden"
        ref={ref1}
      >
        <h1 className="section-title">About me.</h1>
        <hr />
        <p>Get to know a little about me and my skills.</p>
      </motion.div>
      <div className="container">
        <motion.div
          className="wrapper"
          animate={controls2}
          variants={popupVariants}
          initial="hidden"
          ref={ref2}
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
          animate={controls3}
          variants={popupVariants}
          initial="hidden"
          ref={ref3}
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
