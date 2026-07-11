import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SeoManager } from "./components/SeoManager";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <div className="app-shell">
      <SeoManager />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
