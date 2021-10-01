import React, { useState } from "react";
import { fetchCoinCap } from "./API";
// Components

// Interfaces & Types
import { ICoinData } from "./API";

const App = () => {
  const [cryptoData, setCryptoData] = useState<ICoinData[] | void>([]);

  const getAPIData = async () => {
    //implement error handling
    console.log("Hello from the top of the getAPIData function");

    const newAPIData = await fetchCoinCap().catch((e) =>
      console.log("Error in newAPIData: ", e)
    );
    console.log("newAPIData", newAPIData);
    setCryptoData(newAPIData);
  };

  getAPIData();

  return (
    <div className="coinApp">
      The DATA: {cryptoData ? cryptoData : "You need to load the data"}
    </div>
  );
};

export default App;
