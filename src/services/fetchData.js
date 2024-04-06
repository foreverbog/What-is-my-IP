export const fetchIp = async () => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_GEO_API_KEY
      }`
    );
    // Key updated for 1000 requests
    if (!response.ok) {
      throw new Error("Could not fetch" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountry = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${country}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
