export function fetchCoins() {
  // const response = await fetch("https://api.coinpaprika.com/v1/coins");
  // const json = await response.json();
  // return json;
  const response = fetch("https://api.coinpaprika.com/v1/coins").then(
    (response) => response.json()
    // console.log(response,"<res")
  );
  return response;
}
