import { motion, easeInOut } from "framer-motion";
import "../Styles/Logo.scss";

function Logo() {
  return (
    <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay : 2, duration: .5}} className="Logo">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="4em"
        height="4em"
        viewBox="0 0 842.000000 842.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,842.000000) scale(0.100000,-0.100000)">
          <motion.path
            d="M3740 8190 c-403 -55 -658 -119 -985 -248 -373 -147 -676 -319 -992
-564 -451 -349 -823 -793 -1092 -1303 -264 -502 -401 -989 -452 -1610 -34
-419 32 -996 165 -1430 239 -783 724 -1483 1381 -1995 452 -352 997 -612 1542
-734 175 -39 453 -83 595 -93 l88 -6 0 467 0 466 -42 0 c-24 0 -101 9 -173 19
-415 61 -772 188 -1132 403 -400 239 -730 552 -994 945 -38 56 -69 104 -69
106 0 2 -23 44 -52 93 -66 115 -122 235 -191 409 -63 159 -94 268 -136 475
-26 127 -35 191 -56 388 l-5 42 955 0 955 0 0 -935 0 -935 470 0 470 0 0 3030
0 3030 -57 -1 c-32 -1 -119 -9 -193 -19z m-692 -2177 l-3 -1048 -907 -3 c-500
-1 -908 1 -908 4 0 46 76 270 156 458 251 591 700 1104 1259 1436 132 78 368
197 398 199 4 1 6 -470 5 -1046z"
            fill="rgba(0, 0, 0, 0)"
            stroke="#e0d3ff "
            strokeWidth={200}
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
                duration : 1
            }}
          />
          <motion.path
            d="M4430 5180 l0 -3030 470 0 470 0 0 935 0 935 1420 0 1420 0 0 173 c0
94 -5 224 -10 287 -11 125 -48 421 -57 457 l-5 23 -1382 2 -1381 3 -3 1048
c-1 576 0 1047 3 1047 4 0 59 -24 124 -53 378 -171 766 -468 1057 -808 l77
-89 549 0 549 0 -38 73 c-52 99 -233 369 -337 502 -180 231 -409 464 -620 631
-44 35 -97 77 -117 93 -47 39 -266 188 -352 240 -217 132 -580 297 -841 382
-116 38 -383 103 -507 123 -151 26 -389 56 -441 56 l-48 0 0 -3030z"
            fill="transparent"
            stroke="#e0d3ff"
            strokeWidth={200}
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
                duration : 1
            }}
          />
          <motion.path
            d="M5270 1318 c-201 -81 -635 -178 -797 -178 l-43 0 0 -466 0 -467 88 6
c216 16 593 83 795 142 l57 16 0 490 c0 385 -3 489 -12 488 -7 -1 -47 -15 -88
-31z"
            fill="#e0d3ff"
            initial={{
              opacity : 0
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              delay : 1.4
            }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

export default Logo;
