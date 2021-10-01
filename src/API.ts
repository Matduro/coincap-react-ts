export type ICoinData = {
  id: string;
  name: string;
  rank: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
  explorer: string;
};

// Contuniously getting error: "SyntaxError: Unexpected token < in JSON at position 0" with the coincap API. Tested function with other API, and it works fine. Something is likely wrong with the JSON reponse from the API call.
export const fetchCoinCap = async (): Promise<ICoinData[]> => {
  const endpoint = "api.coincap.io/v2/assets";
  const data = await fetch(endpoint).then((res) => {
    if (res.status !== 200) {
      throw new Error(`There was an error with status code ${res.status}`);
    }
    return res.json();
  });

  console.log("Here is your data from coicap", data);
  return data.data.map((coinData: ICoinData) => ({
    id: coinData.id,
    name: coinData.name,
    rank: coinData.rank,
    symbol: coinData.symbol,
    priceUsd: coinData.priceUsd,
    changePercent24Hr: coinData.changePercent24Hr,
    explorer: coinData.explorer,
  }));
};
