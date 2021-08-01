import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterCountries from "./Components/FilterCountries";
import Countries from "./Components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setAllCountries(res.data))
  }, []);


  const handleChange = (event) => {
    setNewSearch(event.target.value);
    console.log(newSearch);
    if (event.target.value) {
      const regex = new RegExp(event.target.value, 'i');
      const filteredCountries = () => allCountries.filter(country => country.name.match(regex));
      setCountries(filteredCountries);
    }
  }

  return (
    <div>
      <FilterCountries newSearch={newSearch} handleChange={handleChange} />
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
