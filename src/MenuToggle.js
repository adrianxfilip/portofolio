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
  const topPaths = ["M10 10 L40 10", "M10 10 L40 30"];

  const [pathIndex, setPathIndex] = useState(0);

  return (
    <div className="MenuTogglePage">
      <button className="menu-button">
        <svg
          width="50px"
          height="50px"
          onClick={() => {
            pathIndex === 0 ? setPathIndex(1) : setPathIndex(0);
          }}
        >
          <motion.path
            d={topPaths[pathIndex]}
            stroke="rgb(0, 255, 68)"
            strokeWidth={4}
            animate
          />
          <path d="M10 30 L40 30" stroke="rgb(0, 255, 68)" strokeWidth={4} />
        </svg>
      </button>
    </div>
  );
}

export default MenuToggle;
