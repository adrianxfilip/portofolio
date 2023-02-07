import { motion} from "framer-motion";
import "./App.scss";
import Header from "./Components/Header";

function App() {
  return (
   <motion.div className="App">
        <Header></Header>
   </motion.div>
  );
}

export default App;
