import React, { useState, useEffect } from "react";
import { fetchCoinCap } from "./API";
// Components

// Interfaces & Types
import { ICoinData } from "./API";

const App = () => {
  const [cryptoData, setCryptoData] = useState<ICoinData[]>([]);

  const getAPIData = async () => {
    //implement error handling
    const newAPIData = await fetchCoinCap();
    console.log("newAPIData", newAPIData);
    setCryptoData(newAPIData);
  };

  useEffect(() => {
    const testing = getAPIData();
  }, []);

  return <div className="coinApp">The DATA: {cryptoData}</div>;
};

export default App;
