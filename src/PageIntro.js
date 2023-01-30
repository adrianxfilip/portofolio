import {
  motion,
  easeInOut,
} from "framer-motion";
import "./App.scss";

function PageIntro() {
  return (
    <div className="PageIntro">
      <motion.div
        className="logo-wrapper"
        initial={{
            position : "fixed",
            top: "50%",
            left : "50%",
            transform : "scale(1)"
        }}
        animate={{
            position : "fixed",
            top: "75px",
            left : "75px",
            transform : "scale(0.2)"
        }}
        transition = {{
            delay : 2.5
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 500 500"
        >
          <motion.path
            id="letter-a"
            d="M243,15L17,238.027l21.773,23.986,65.779-63.51,48.012,45.17L87.606,308.605,110.2,334.014,242.939,201.326V15ZM129.97,175.917l79.079-79.048V187.21l-33.891,33.878Z"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              ease: easeInOut,
            }}
          />
          <motion.path
            id="letter-f"
            d="M341.788,147.686L367.206,125.1,260,15l-0.115,186.326L391,330l21-23-61-58,68-69-20.727-23.845-67.782,67.756-39.54-36.7V96.869ZM445,216"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.7,
              ease: easeInOut,
            }}
          />
          <motion.path
            d="M457.582,263.435L483,238.027l-25.418-25.409-25.419,25.409Z"
            initial={{
              opacity: 0,
              transform: "scale(2)",
            }}
            animate={{
              opacity: 1,
              transform: "scale(1)",
            }}
            transition={{
              delay: 2,
              ease: easeInOut,
            }}
          />
          <motion.g
            initial={{
              transform: "rotate(45deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              delay: 1,
            }}
          >
            <motion.path
              id="dot"
              d="M127 332 L160 365 L337 318 L372 350"
              stroke="rgb(0,0,0)"
              strokeWidth={30}
              fill="transparent"
              strokeDasharray={300}
              initial={{
                strokeDashoffset: 300,
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              transition={{
                duration: 0.7
              }}
            />
            <motion.path
              id="letter-x"
              d="M255 455 L220 420 L280 260 L241 221"
              stroke="rgb(0,0,0)"
              strokeWidth={30}
              fill="transparent"
              strokeDasharray={300}
              initial={{
                strokeDashoffset: -275,
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              transition={{
                duration: 0.5
              }}
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}

export default PageIntro;
