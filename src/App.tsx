import React, { useState } from "react";
import { fetchCoinCap } from "./API";
// Components

// Interfaces & Types
import { ICoinData } from "./API";

const App = () => {
  const [cryptoData, setCryptoData] = useState<ICoinData[]>([]);
  return <div className="coinApp"></div>;
};

export default App;
