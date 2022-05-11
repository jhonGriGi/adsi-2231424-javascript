import getDataTRM from "../api/api";

const historyLayout = () => {
  document.getElementById("trm-container").innerHTML = `
    <table class="table table-stripped mt-3">
      <thead>
        <tr>
          <th>#id</th>
          <th>Valor</th>
          <th>Vigencia desde</th>
        </tr>
      </thead>
      <tbody id="table-content"></tbody>
    </table>
  `;
};

const fillTableContent = async () => {
  const data = await getDataTRM();
  let getDate = data.reduce((acc, el) => {
    let splitted = el.vigenciadesde.split("T");
    let getDay = new Date(splitted[0]).getDay();
    let getMonth = new Date(splitted[0]).getMonth();
    let getYear = new Date(splitted[0]).getFullYear();
    acc.push(
      `${getDay < 10 ? "0" + getDay : getDay}-${
        getMonth < 10 ? "0" + getMonth : getMonth
      }-${getYear}`
    );
    return acc;
  }, []);
  let layout = "";
  data.map((money, index) => {
    layout += `
      <tr>
        <td>${index}</td>
        <td>${money.valor}</td>
        <td>${getDate[index]}</td>
      </tr>
    `;
  });
  document.getElementById("table-content").innerHTML = layout;
};

const History = () => {
  document.getElementById("trm-container").innerHTML = '';
  document.getElementById("history").addEventListener("click", () => {
    historyLayout();
    fillTableContent();
  });
};

export default History;
