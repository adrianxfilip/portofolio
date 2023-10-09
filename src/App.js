import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Header></Header>
        <Landing isLoaded={true}></Landing>
        <AboutMe></AboutMe>
      </motion.div>
    </AnimatePresence>
  );
}
export default App;
