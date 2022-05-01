document
  .querySelector("#lista_paises")
  .addEventListener("change", traerInfoPaises);
let baseUrl = "https://restcountries.com/v3.1/";
traerPaises();

function traerPaises() {
  fetch(baseUrl + "all")
    .then((response) => response.json())
    .then((data) => {
      data.map((country) => {
        document.getElementById("lista_paises").innerHTML += `
          <option value="${country.name.common}">${country.name.common}</option>
        `;
      });
    });
}

function traerInfoPaises() {
  fetch(baseUrl + "name/" + this.value)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("Error en la llamada");
    })
    .then((data) => {
      console.log(data);
      let body = "";
      data.map((country) => {
        body += `
        <tr>
          <th scope="row">${country.ccn3}</th>
          <td>${country.name.common}</td>
          <td>${country.capital}</td>
          <td>${country.region}</td>
          <td>${country.population}</td>
          <td>
            <img src="${country.flags.png}" class="img-fluid w-25">
          </td>
        </tr>
      `;
      });
      document.getElementById("contenido").innerHTML += body;
    })
    .catch((error) => console.log(error));
}
