import { motion} from "framer-motion";
import "../Styles/Header.scss"
import Menu from "./Menu";
import Logo from "./Logo"
import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function Header() {

  return (
   <motion.header className="header">
      <Logo />
      <Menu />
   </motion.header>
  );
}

export default Header;
