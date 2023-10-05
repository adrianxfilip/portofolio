import { motion} from "framer-motion";
import "../Styles/Header.scss"
import Menu from "./Menu";
import logo from "../logo.png";

function Header() {
  return (
   <motion.header className="header">
      <img src={logo} /> 
      <Menu></Menu>
   </motion.header>
  );
}

export default Header;
