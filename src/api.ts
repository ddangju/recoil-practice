export function fetchCoins() {
  // const response = await fetch("https://api.coinpaprika.com/v1/coins");
  // const json = await response.json();
  // return json;

  //react-query apply
  const response = fetch("https://api.coinpaprika.com/v1/coins").then(
    (response) => response.json()
  );
  return response;
}


export function fetchCoin(coinId:any) {
  const response = fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (response) => response.json()
  );
  return response;
}
export function fetchTickers(coinId:any) {
  const response = fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
    (response) => response.json()
  );
  return response;
}
export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
    
  ).then((response) => response.json());
}