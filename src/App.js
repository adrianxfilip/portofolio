import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Landing from "./Components/Landing";
import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return isLoaded ? (
    <AnimatePresence>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Header></Header>
        <Landing></Landing>
      </motion.div>
    </AnimatePresence>
  ) : (
    <motion.div className="App pre-loaded">
      <div className="logo-container">
        <Logo></Logo>
      </div>
    </motion.div>
  );
}
export default App;
