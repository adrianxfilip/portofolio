import { click } from "@testing-library/user-event/dist/click";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.scss";

const variants = {
  visible : {
    pathLength : 1
  },
  hidden : {
    pathLength : 0
  }
}

const backgroundVariants = {
  green : {
    background : "linear-gradient(90deg, rgba(0,56,16,1) 0%, rgba(0,60,40,1) 100%)"
  },
  red :{
    background : "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(60,0,13,1) 100%)"
  }
}


function ShopButton() {

  const [addToCart, changeAction] = useState(true)

  const [clickable, changeClickable] = useState(true)

  const tickControls = useAnimation()

  const crossControls = useAnimation()

  const backgroundControls = useAnimation()

  useEffect(()=>{
    changeClickable(false)
    console.log(addToCart, clickable)
    if(addToCart){
      crossControls.start("hidden")
      backgroundControls.start("green")
      setTimeout(() => {
        tickControls.start("visible")
        changeClickable(true)
      }, 300);
    }else{
      tickControls.start("hidden")
      backgroundControls.start("red")
      setTimeout(() => {
        crossControls.start("visible")
        changeClickable(true)
      }, 300);
    }
  }, [addToCart])

  return (
    <motion.div 
      className="App"
      variants={backgroundVariants}
      animate={backgroundControls}
      initial="green"
      transition={{
        duration : 0.4
      }}
    >
      <svg
        width="300px"
        height="300px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>{if(clickable){
          changeAction(!addToCart)
        }}}
      >
        <g opacity="1">
          <motion.path
            d="M9.61914 16L11.1191 17.5L14.3691 14.5"
            id="tick"
            stroke="rgb(0, 255, 68)"
            strokeWidth="0.7"
            variants={variants}
            initial={"visible"}
            animate={tickControls}
            transition={{
              duration: 0.2,
            }}
          />
          <motion.path
            d="M14 18.06L10 14"
            stroke="rgb(255, 25, 0)"
            strokeWidth="0.7"
            strokeMiterlimit="10"
            variants={variants}
            initial="hidden"
            animate={crossControls}
            transition={{
              duration: 0.2,
            }}
          />
          <motion.path
            d="M14.06 14L10 18.09"
            stroke="rgb(255, 25, 0)"
            strokeWidth="0.7"
            strokeMiterlimit="10"
            variants={variants}
            initial="hidden"
            animate={crossControls}
            transition={{
              duration: 0.2,
              delay:0.1
            }}
          />
          <path
            d="M8.80945 2L5.18945 5.63"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1895 2L18.8095 5.63"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

export default ShopButton;
