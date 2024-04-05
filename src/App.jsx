import FetchIp from "./pages/FetchIp.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import { fetchIp, fetchCountry } from "./services/fetchData.js";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import data from "./data.json";

function App() {
  const [userData, setUserData] = useState(data);
  const [countryData, setCountryData] = useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const data = await fetchIp();

  //       setUserData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

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
      {/* <NavBar /> */}
      {/* <h1>
        {countryData.length > 0 ? (
          <img
            className="w-10 rounded-2xl"
            src={countryData[0].flags.png}
            alt={countryData[0].flags.alt}
          />
        ) : (
          <p>Loading..</p>
        )}
      </h1> */}
      {/* <MapLocation /> */}

      {/* <HeroSection /> */}
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HeroSection />} />
          <Route
            path="/addresscheck"
            element={<FetchIp userData={userData} countryData={countryData} />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
