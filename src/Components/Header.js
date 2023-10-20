import { motion} from "framer-motion";
import "../Styles/Header.scss"
import Menu from "./Menu";
import Logo from "./Logo"
import { useState } from "react";

function Header() {

  const [isMenuOpen, toggleMenu] = useState(false)

  return (
   <motion.header className="header">
      <Logo isMenuOpen={isMenuOpen} />
      <Menu toggleLogo={toggleMenu}/>
   </motion.header>
  );
}

export default Header;
