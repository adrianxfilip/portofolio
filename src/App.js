import { motion} from "framer-motion";
import "./App.scss";
import Menu from "./Components/Menu";
import Logo from "./Components/Logo";

function App() {
  return (
   <motion.div className="App">
      <Logo></Logo>
      <Menu></Menu>
   </motion.div>
  );
}

export default App;
