document.getElementById("api").addEventListener("click", ajax);

function ajax() {
  const url = "https://restcountries.com/v3.1/all";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let body = "";
      data.map((country) => {
        // body += `Nombre: ${country.name.common} <br> Capital: ${country.capital} <br> Bandera: ${country.flag} <br>`;
        body += `
            <div class="shadow p-3 mt-4 mx-2">
                <img src="${country.flags.png}">
                <p>
                <strong>Nombre: ${country.name.common}</strong>
                </p>
                <p>
                <strong>Capital: ${country.capital}</strong>
                </p>
                <p>
                <strong>Bandera: ${country.flag}</strong>
                </p>
            </div>
        `;
      });
      document.getElementById("mostrarApi").innerHTML = body;
    })
    .catch((error) => console.log(error));
}
