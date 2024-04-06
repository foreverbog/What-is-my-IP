import FetchIp from "./pages/FetchIp.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import About from "./pages/About.jsx";
import { fetchIp, fetchCountry } from "./services/fetchData.js";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  const [userData, setUserData] = useState(null);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetchIp();

        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.location) {
          const data = await fetchCountry(userData.location.country);
          setCountryData(data);
        }
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userData]);

  return (
    <main className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HeroSection />} />
          <Route
            path="/addresscheck"
            element={<FetchIp userData={userData} countryData={countryData} />}
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
