import "./App.css";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Home />
    </AnimatePresence>
  );
}

export default App;
