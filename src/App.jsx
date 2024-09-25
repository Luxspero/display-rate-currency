import Content from "./components/Content";
import Header from "./components/Header";
import fetchData from "./utility/fecth";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [currencyData, setCurrencyData] = useState({});
  const [loading, setLoading] = useState(true);

  const urlCurrency = import.meta.env.VITE_URL_CURRENCY;
  const apiKey = import.meta.env.VITE_API_KEY;

  const urlFetch = `${urlCurrency}apikey=${apiKey}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`;

  const fetchCurrencyData = async () => {
    try {
      const data = await fetchData(urlFetch);
      setCurrencyData(data.rates); // Simpan data ke state
    } catch (error) {
      console.error("Error fetching currency data:", error);
    } finally {
      setLoading(false); // Set loading ke false setelah selesai fetch
    }
  };
  useEffect(() => {
    fetchCurrencyData();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <Content currencyData={currencyData} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
