import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "../Styles/Menu.scss";

function Menu() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const topVariants = {
    open: {
      y: ".6em",
      backgroundColor: "#060143",
      rotate: "45deg",
      width: "60%",
      height: ".15em",
      transition: {
        y: {
          duration: 0.2,
        },
        width: {
          duration: 0.1,
        },
        rotate: {
          delay: 0.2,
          duration: 0.15,
        },
      },
    },
    closed: {
      y: "0",
      rotate: "0deg",
      backgroundColor: "#e7c3ff",
      width: "100%",
      height: ".2em",
      transition: {
        y: {
          delay: 0.2,
          duration: 0.2,
        },
        width: {
          delay: 0.2,
          duration: 0.1,
        },
        rotate: {
          duration: 0.15,
        },
      },
    },
  };

  const bottomVariants = {
    open: {
      y: "-.36em",
      rotate: "-45deg",
      backgroundColor: "#060143",
      width: "60%",
      height: ".15em",
      transition: {
        y: {
          duration: 0.2,
        },
        width: {
          duration: 0.1,
        },
        rotate: {
          delay: 0.2,
          duration: 0.15,
        },
      },
    },
    closed: {
      y: "0",
      rotate: "0deg",
      backgroundColor: "#e7c3ff",
      width: "100%",
      height: ".2em",
      transition: {
        y: {
          delay: 0.2,
          duration: 0.2,
        },
        width: {
          delay: 0.2,
          duration: 0.1,
        },
        rotate: {
          duration: 0.15,
        },
      },
    },
  };

  const menuVariants = {
    open: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
    closed: {
      transform: "scale(0)",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
  };

  const menuControls = useAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      menuControls.start("open");
    } else {
      menuControls.start("closed");
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container">
      <button
        className="menu-button"
        onClick={() => {
          toggleMenu(!isMenuOpen);
        }}
      >
        <motion.hr
          variants={topVariants}
          animate={menuControls}
          initial="closed"
          style={{ originX: 0.5 }}
          className="line-1"
        ></motion.hr>
        <motion.hr
          variants={bottomVariants}
          animate={menuControls}
          initial="closed"
          style={{ originX: 0.5 }}
          className="line-2"
        ></motion.hr>
      </button>
      <motion.nav
        className="menu-wrapper"
        style={{zIndex : 4}}
        variants={menuVariants}
        animate={menuControls}
        initial="closed"
      >
        <ul>
          <li>
            <a href="">
              <i className="fi fi-rr-following"></i> About Me
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <i className="fi fi-rr-briefcase"></i> My Work
            </a>
          </li>
          <li>
            <a href="">
              <i className="fi fi-rr-document"></i> Résumé
            </a>
          </li>
        </ul>
        <p>SAY HELLO</p>
        <ul>
          <li>
            <a href="mailto:adrianxfilip@gmail.com">
              <i className="fi fi-sr-at"></i> adrianxfilip@gmail.com
            </a>
          </li>
          <li>
            <a href="https://t.me/adrianfilip" target="_blank">
              <i className="fi fi-brands-telegram"></i> t.me/adrianfilip
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}

export default Menu;
