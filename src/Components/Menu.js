import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "../Styles/Menu.scss";

function Menu() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const topVariants = {
    open: {
      strokeDasharray: "20 100",
      strokeDashoffset: -74,
    },
    closed: {
      strokeDasharray: "30 100",
      strokeDashoffset: 0,
    },
  };

  const bottomVariants = {
    open: {
      strokeDasharray: "20 100",
      strokeDashoffset: -74,
    },
    closed: {
      strokeDasharray: "30 100",
      strokeDashoffset: 0,
    },
  };

  const menuVariants = {
    open: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.2,
        },
        transform: {
          duration: 0.3,
        },
      },
    },
    closed: {
      transform: "scale(0)",
      opacity: 0,
      transition: {
        opacity: {
          duration: 0.2,
        },
        transform: {
          duration: 0.3,
        },
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
  });

  return (
    <div className="menu-container">
      <button
        className="menu-button"
        onClick={() => {
          toggleMenu(!isMenuOpen);
        }}
      >
        <svg width="5em" height="5em" viewBox="-5 -10 60 60">
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
              duration: 0.6,
              type: "spring",
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
              duration: 0.6,
              type: "spring",
            }}
          />
        </svg>
      </button>
      <motion.nav
        className="menu-wrapper"
        variants={menuVariants}
        animate={menuControls}
        initial="closed"
      >
        <ul>
          <li><a href="">About Me</a></li>
          <li><a href="">My Work</a></li>
          <li><a href="">Résumé</a></li>
        </ul>
        <p>SAY HELLO</p>
        <ul>
          <li>          <svg
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg><span><a href="mailto:adrianxfilip@gmail.com">adrianxfilip@gmail.com</a></span></li>
          <li>
          <svg fill="#000000" width="1.3em" height="1.3em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
</svg><span><a href="https://t.me/adrianfilip" target="_blank">t.me/adrianfilip</a></span>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}

export default Menu;
