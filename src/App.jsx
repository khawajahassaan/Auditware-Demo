import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Planning from "./components/Planning";
import Reporting from "./components/Reporting";
import Empty from "./components/Empty";
function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Empty />} />
          <Route path="/execution/audit-program" element={<Home />} />
          <Route path="/execution/audit-program/audit/:id" element={<Home />} />
          <Route path="/execution/observation" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
