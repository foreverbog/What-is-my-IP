import FetchIp from "./pages/FetchIp.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import About from "./pages/About.jsx";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/addresscheck" element={<FetchIp />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
