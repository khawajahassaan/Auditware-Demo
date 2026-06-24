import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Planning from "./components/Planning";
import Reporting from "./components/Reporting";

function App() {
  return (
    <div>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audit/:id" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
