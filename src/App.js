import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SharedComponents from "./components/SharedComponents";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <SharedComponents>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SharedComponents>
    </div>
  );
}

export default App;
