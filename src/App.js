import { click } from "@testing-library/user-event/dist/click";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.scss";
import ShopButton from "./ShopButton";
import MenuToggle from "./MenuToggle";

function App() {
  return (
   <motion.div className="App">
      <MenuToggle>

      </MenuToggle>
   </motion.div>
  );
}

export default App;
