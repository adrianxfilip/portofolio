import { click } from "@testing-library/user-event/dist/click";
import {
  motion,
  useAnimation,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import "./App.scss";
function MenuToggle() {

  const [isMenuOpen, toggleMenu] = useState(false);

  const menuVariants = {
    open: {
      d: [
        "M10 10 L40 10 M10 20 L40 20 M10 30 L40 30",
        "M10 10 L40 10 M10 20 L10 20 M10 30 L40 30",
        "M15 10 L35 30 M10 20 L10 20 M15 30 L35 10"
      ]
    },
    closed: {
      d: [
        "M15 10 L35 30 M10 20 L10 20 M15 30 L35 10",
        "M10 10 L40 10 M10 20 L10 20 M10 30 L40 30",
        "M10 10 L40 10 M10 20 L40 20 M10 30 L40 30"
      ]
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
    <div className="MenuTogglePage">
      <button className="menu-button" onClick={() => { toggleMenu(!isMenuOpen) }}>
        <svg
          width="50px"
          height="50px"
        >
          <motion.path
            d="M10 10 L40 10 M10 20 L40 20 M10 30 L40 30"
            stroke="rgb(0, 255, 68)"
            strokeWidth={2}
            variants={menuVariants}
            animate={menuControls}
            initial="closed"
            transition={{
              duration: 0.2,
              times: [0, 0.3],
              ease: "easeInOut"
            }}
          />
        </svg>
      </button>
    </div>
  );
}

export default MenuToggle;
