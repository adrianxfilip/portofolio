import { motion} from "framer-motion";
import "../Styles/Header.scss"
import Menu from "./Menu";
import Logo from "./Logo";

function Header() {
  return (
   <motion.header className="header">
      <Logo></Logo>
      <Menu></Menu>
   </motion.header>
  );
}

export default Header;
