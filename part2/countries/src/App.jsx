import { useState, useEffect } from "react";
import countryService from "./services/countryService";
import "./App.css";

function App() {
  const [countries, setCountries] = useState("");

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <>
      <label htmlFor="search">find countries</label>
      <input type="text" id="countries" />
      <ul></ul>
    </>
  );
}

export default App;
