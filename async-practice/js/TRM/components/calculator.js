import getDataTRM from "../api/api";

const calculatorLayout = () => {
  document.getElementById("container").innerHTML += `
    <section class="container mt-3">
      <h3>Calculator</h3>
      <form id="calculator-id">
        <div class="form-group row my-4">
          <label for="dolar-to-cop" class="col-5 text-end">Dolar to Cop</label>
          <div class="col-1">
            <input type="radio" id="dolar-to-cop" name="convert" value="toCop" class="form-check-input">
          </div>
          <label for="cop-to-dolar" class="col-2 text-start">Cop to Dolar</label>
          <div class="col-1">
            <input type="radio" id="cop-to-dolar" name="convert" value="toDolar" class="form-check-input ml-1">
          </div>
        </div>
        <div class="form-group offset-3 row">
          <label for="from" class="col-1 text-end">From:</label>
          <div class="col-4">
            <input type="text" id="from" class="form-control" name="from">
          </div>
           <div class="col-3">
          <input type="submit" id="submit-button" class="btn btn-info">
        </div>
      </form>
    </section>
    <section id="result-layout" class="rounded shadow col-4 offset-4 mt-3 p-3">
    </section>
  `;
}

const resultLayout = async () => {
  const actualPrice = await getActualPrice();
  document.getElementById("result-layout").innerHTML += `
    <h3>Precio actual: <span>${actualPrice}</span></h3>
    <p><i>El dinero que usted posee hasta el momento sera calculado en base al precio actual</i></p>
    <h5>Resultado de la operacion: </h5>
    <span id="result"></span>
  `;
}

const getActualPrice = async () => {
  const data = await getDataTRM();
  return data[0].valor;
}

const getFormat = (number, currency) => {
  return new Intl.NumberFormat('en-in', { style: 'currency', currency: currency, minimumFractionDigits: 2 }).format(number);
}

const calculatorLogic = async (event) => {
  event.preventDefault();
  let fromMoney = event.target.from.value;
  let typeConvert = event.target.convert.value;
  let result = 0;
  let currency;
  let actualPrice = await getActualPrice();

  if (typeConvert === "toCop") {
    result = (parseInt(fromMoney) * parseInt(actualPrice));
    currency = getFormat(result, 'COP');
  }

  if (typeConvert === "toDolar") {
    result = (parseInt(fromMoney) / parseInt(actualPrice));
    currency = getFormat(result, "USD");
  }

  document.getElementById('result').innerHTML = currency;
}

const Calculator = () => {
  calculatorLayout();
  document.getElementById('calculator-id').addEventListener('submit', calculatorLogic);
  resultLayout();
}

export default Calculator;