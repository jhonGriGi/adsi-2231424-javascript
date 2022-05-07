let apiKey = {
  key: "437533cb-2643-46bf-98d7-6fcf03409571",
};
let url = `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?X-CMC_PRO_API_KEY='437533cb-2643-46bf-98d7-6fcf03409571'`;

// const getData = async () => {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: 'no-cors',
//     headers: {
//       'X-CMC_PRO_API_KEY': apiKey.key
//     }
//   });
//   const data = await response.json();
//   return data;
// };
// console.log(getData());

export function coinMarket() {
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
}

// request("GET", url)
//   .then((response) => {
//     response.target.responseText;
//     console.log(response.target.responseText);
//   })
//   .catch((err) => console.log(err));

// function request(method, url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = resolve;
//     xhr.onerror = reject;
//     xhr.send();
//   });
// }
