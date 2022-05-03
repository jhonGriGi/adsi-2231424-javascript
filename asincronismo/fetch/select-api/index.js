document
  .getElementById("list_countries")
  .addEventListener("click", showCountries);
let baseUrl = "https://restcountries.com/v3.1/";

function showCountries() {
  document.getElementById("mostrarApi").innerHTML = "";
  console.log("hola");

  document.getElementById("mostrarApi").innerHTML = `
    <div class="row">
      <div class="col-10 text-center mx-auto">
        <h1>
          Select a country
        </h1>
        <form action="">
          <select name="" id="lista_paises" class="form-control">
            <option value="">Select one</option>
          </select>
        </form>
      </div>
      <div class="col-12 text-center">
        <h2>Countries</h2>
        <table class="table table-striped">
          <thead>
            <th>Alpha code</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Population</th>
            <th>Flag</th>
          </thead>
          <tbody id="contenido2">

          </tbody>
        </table>
      </div>
    </div>
  `;

  document
    .querySelector("#lista_paises")
    .addEventListener("change", traerInfoPaises);
  traerPaises();
}

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
      document.getElementById("contenido2").innerHTML += body;
    })
    .catch((error) => console.log(error));
}
