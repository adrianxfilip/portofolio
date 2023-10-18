import {
  AnimatePresence,
  motion,
  transform,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import "../Styles/Menu.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

function Menu() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const animationDuration = 0.2;

  const topVariants = {
    open: {
      x: ".40em",
      y: "-.3em",
      borderColor: "#060143",
      rotate: "45deg",
      transition: {
        duration: animationDuration,
      },
    },
    closed: {
      x: "0",
      y: "0",
      rotate: "0deg",
      borderColor: "white",
      transition: {
        duration: animationDuration,
      },
    },
  };

  const middleVariants = {
    open: {
      rotate: "-45deg",
      borderColor: "#060143",
      transition: {
        duration: animationDuration,
      },
    },
    closed: {
      rotate: "0deg",
      borderColor: "white",
      transition: {
        duration: animationDuration,
      },
    },
  };

  const bottomVariants = {
    open: {
      x: ".45em",
      y: ".35em",
      rotate: "45deg",
      borderColor: "#060143",
      transition: {
        duration: animationDuration,
      },
    },
    closed: {
      x: "0",
      y: "0",
      rotate: "0deg",
      borderColor: "white",
      transition: {
        duration: animationDuration,
      },
    },
  };

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery("only screen and (max-width: 768px)");

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  const menuVariants = {
    open: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        transform: {
          duration: 0.2,
        },
        opacity: {
          duration: 0.3,
        },
        type: "easeInOut",
      },
    },
    closed: {
      transform: isMobile ? "scale(1)" : "scale(0)",
      opacity: 0,
      transition: {
        transform: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
        type: "easeInOut",
      },
    },
  };

  const listVariants = {
    open: {
      y: "0",
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
        type: "easeIn",
      },
    },
    closed: {
      y: "20px",
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const menuControls = useAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      menuControls.start("open");
      if(isMobile){
        document.body.style.overflow = "hidden"
      }
    } else {
      menuControls.start("closed");
      if(document.body.style.overflow == "hidden"){
        document.body.style.overflow = "unset"
      }
    }
  }, [isMenuOpen, isMobile]);

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
          style={{ originX: 0 }}
          className="line-1"
        ></motion.hr>
        <motion.hr
          variants={middleVariants}
          animate={menuControls}
          initial="closed"
          style={{ originX: 0.5 }}
          className="line-2"
        ></motion.hr>
        <motion.hr
          variants={bottomVariants}
          animate={menuControls}
          initial="closed"
          style={{ originX: 1 }}
          className="line-3"
        ></motion.hr>
      </button>
      <AnimatePresence mode="wait">
        <motion.nav
          className="menu-wrapper"
          style={{ zIndex: 4, scale: isMobile ? 1 : "unset" }}
          variants={menuVariants}
          animate={menuControls}
          initial="closed"
        >
          <motion.ul
            variants={listVariants}
            animate={menuControls}
            initial="closed"
            className={isMenuOpen ? "" : "closed-menu"}
          >
            <li>
              <a href="">
                <i className="fi fi-br-following"></i> About Me
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="fi fi-br-briefcase"></i> My Work
              </a>
            </li>
            <li>
              <a href="">
                <i className="fi fi-br-document"></i> Résumé
              </a>
            </li>
          </motion.ul>
          <p>SAY HELLO</p>
          <motion.ul
            variants={listVariants}
            animate={menuControls}
            initial="closed"
            className={isMenuOpen ? "" : "closed-menu"}
          >
            <li>
              <a href="mailto:adrianxfilip@gmail.com">
                <i className="fi fi-br-at"></i> adrianxfilip@gmail.com
              </a>
            </li>
            <li>
              <a href="https://t.me/adrianfilip" target="_blank">
                <i className="fi fi-brands-telegram"></i> t.me/adrianfilip
              </a>
            </li>
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
}

export default Menu;
