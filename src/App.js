import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SharedComponents from "./components/SharedComponents";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <SharedComponents>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SharedComponents>
    </div>
  );
}

export default App;
