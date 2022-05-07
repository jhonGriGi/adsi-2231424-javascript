import { getGovData } from "../api/gov-api.js";

export const municipios = () => {
  document.getElementById("contenido").innerHTML = `
    <form class"mt-3">
      <h1>Selecciona un municipio</h1>
      <select id="select-municipality" class="form-control">
      </select>
    </form>
    <table class="table table-stripped mt-3">
      <thead>
        <tr>
          <th>#Dep.</th>
          <th>#Mun.</th>
          <th>Departamento</th>
          <th>Municipio</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody id="table-content">

      </tbody>
    </table>
  `;
  fillSelect();
  document.querySelector("select").addEventListener("change", (e) => {
    fillTable(e.target.value);
  });
};

const fillSelect = async () => {
  let data = await getGovData();
  let body = "<option value=''>Select One</option>";
  data.map((municipality) => {
    body += `
      <option value="${municipality.municipio}">${municipality.municipio}</option>
    `;
  });
  document.getElementById("select-municipality").innerHTML = body;
  console.log(data);
};

const fillTable = async (value) => {
  let data = await getGovData("?municipio=" + value);
  document.getElementById("table-content").innerHTML += `
    <tr>
      <td>${data[0].c_digo_dane_del_departamento}</td>
      <td>${data[0].c_digo_dane_del_municipio}</td>
      <td>${data[0].departamento}</td>
      <td>${data[0].municipio}</td>
      <td>${data[0].region}</td>
    </tr>
  `;
};
