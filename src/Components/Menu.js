import {
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import "../Styles/Menu.scss";

function Menu() {

  const [isMenuOpen, toggleMenu] = useState(false);

  const topVariants = {
    open: {
      strokeDasharray : "20 100",
      strokeDashoffset : -74
    },
    closed: {
      strokeDasharray : "30 100",
      strokeDashoffset : 0
    }
  }

  const bottomVariants = {
    open: {
      strokeDasharray : "20 100",
      strokeDashoffset : -74
    },
    closed: {
      strokeDasharray : "30 100",
      strokeDashoffset : 0
    }
  }

  const menuControls = useAnimation()

  useEffect(() => {
    if (isMenuOpen) {
      menuControls.start("open")
    } else {
      menuControls.start("closed")
    }
  })

  return (
    <div className="Menu">
      <button className="menu-button" onClick={() => { toggleMenu(!isMenuOpen) }}>
        <svg
          width="5em"
          height="5em"
          viewBox="-5 -10 60 60"
        >
          <motion.path
            fill="transparent"
            d="M10 15 L40 15 A10 10 0 0 1 40 35 L37 35 L15 10"
            strokeLinejoin="round"
            stroke="rgb(0,0,0)"
            strokeWidth={3}
            variants={topVariants}
            animate={menuControls}
            initial="closed"
            transition={{
              duration : 0.6,
              type : "spring"
            }}
          />
            <motion.path
            d="M10 25 L40 25 A5 5 0 0 0 40 5 L37 5 L15 30"
            strokeLinejoin="round"
            fill="transparent"
            stroke="rgb(0,0,0)"
            strokeWidth={3}
            variants={bottomVariants}
            animate={menuControls}
            initial="closed"
            transition={{
              duration : 0.6,
              type : "spring"
            }}
          />
        </svg>
      </button>
    </div>
  );
}

export default Menu;
