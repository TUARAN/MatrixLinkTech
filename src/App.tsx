import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SeoManager } from "./components/SeoManager";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ProjectsPage } from "./pages/Projects";
import { EcosystemPage } from "./pages/Ecosystem";
import { BlogPage } from "./pages/Blog";

function App() {
  return (
    <div className="app-shell">
      <SeoManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
