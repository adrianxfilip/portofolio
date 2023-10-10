import "./App.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Portofolio from "./Components/Portofolio";

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
        <Portofolio></Portofolio>
      </motion.div>
    </AnimatePresence>
  );
}
export default App;
