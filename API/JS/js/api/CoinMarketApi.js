const url =
  "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD";

export const CoinMarketApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}