import { CoinMarketApi } from "../api/CoinMarketApi.js";

export const CoinMarket = () => {
  document.getElementById("contenido").innerHTML = `
    <table class="table table-stripped mt-3">
      <thead>
        <tr>
          <th>Image</th>
          <th>#id.</th>
          <th>Name</th>
          <th>FullName</th>
          <th>Internal</th>
        </tr>
      </thead>
      <tbody id="table-content">

      </tbody>
    </table>
  `;
  fillTable();
};

const fillTable = async () => {
  let data = await CoinMarketApi();
  let layout = '';
  data.Data.map(coin => {
    layout += `
    <tr>
      <td><img src="${coin.CoinInfo.ImageUrl}"></td>
      <td>${coin.CoinInfo.Id}</td>
      <td>${coin.CoinInfo.Name}</td>
      <td>${coin.CoinInfo.FullName}</td>
      <td>${coin.CoinInfo.Internal}</td>
    </tr>
  `;
  })
  // document.getElementById("table-content").innerHTML += `
  //   <tr>
  //     <td><img src="${data.Data[0].CoinInfo.ImageUrl}"></td>
  //     <td>${data.Data[0].CoinInfo.Id}</td>
  //     <td>${data.Data[0].CoinInfo.Name}</td>
  //     <td>${data.Data[0].CoinInfo.FullName}</td>
  //     <td>${data.Data[0].CoinInfo.Internal}</td>
  //   </tr>
  // `;
  document.getElementById("table-content").innerHTML += layout;
  console.log(data.Data[0].CoinInfo.Id);
};
