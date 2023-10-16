import { motion} from "framer-motion";
import "../Styles/Header.scss"
import Menu from "./Menu";
import Logo from "./Logo"
import { useState, useEffect } from "react";

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () =>
      setScrolled(window.pageYOffset > 50)
      );
  }, []);

  return (
   <motion.header className="header">
      <Logo />
      <Menu scrolled={scrolled} />
   </motion.header>
  );
}

export default Header;
