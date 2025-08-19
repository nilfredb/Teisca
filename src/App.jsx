import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeiscaWebsite from "./components/teisca";
import TeiscaCompleteWebsite from "./components/proyects";
import ProjectsPage from "./components/test";
import AboutUsPage from "./components/aboutus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeiscaCompleteWebsite />} />
        <Route path="/B" element={<ProjectsPage />} />
        <Route path="/C" element={<TeiscaWebsite />} />
        <Route path="/A" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
