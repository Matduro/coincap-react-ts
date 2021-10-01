export interface ICoinData {
  id: string;
  name: String;
  rank: number;
  symbol: string;
  priceUsd: number;
  changePercent24Hr: number;
  explorer: string;
}

export const fetchCoinCap = async (): Promise<<ICoinData>() => []> => {
  const endpoint = "api.coincap.io/v2/assets";
  const coinData = await (await fetch(endpoint)).json();
  return (
    console.log("Here is your data from coicap", coinData.data), coinData.data
  );
};
