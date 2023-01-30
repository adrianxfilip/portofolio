import { click } from "@testing-library/user-event/dist/click";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.scss";
import ShopButton from "./ShopButton";
import MenuToggle from "./MenuToggle";
import PageIntro from "./PageIntro";

function App() {
  return (
   <motion.div className="App">
      <PageIntro></PageIntro>
   </motion.div>
  );
}

export default App;
