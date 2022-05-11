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
        <div class="form-group row">
          <label for="from" class="col-1 text-end">From:</label>
          <div class="col-3">
            <input type="text" id="from" class="form-control" name="from">
          </div>

           <div class="col-3">
          <input type="submit" class="btn btn-info">
        </div>
        <div class="form-group row">
          <p ><span id="result"></span></p>
        </div>
        </div>
      </form>
    </section>
  `;
}

const resultLayout = async () => {
  // const dates = new Date();
  // const data = await getDataTRM();
  // const filter = Object.entries(data).reduce((acc, el) => {
  //   let date = new Date(el.vigenciadesde);
  //   if ((dates.getDate - 7) <= date) {
  //     acc[el] = el;
  //   }
  //   return acc;
  // }, {});
  // data.map(coin => console.log(coin.vigenciadesde));
  // console.log(data);
  // console.log(filter);
  const data = await getDataTRM();
  let times = [];
  const getTime = new Date();
  const thisWeek = getTime.getDate() - 30;

  data.map((coin, index) => {
    let date = coin.vigenciadesde.split("T");
    if (date[0] == thisWeek) {
      times[index] = date[0];
    }
  })
  console.log(times)
  console.log(data)

}

const calculatorLogic = (event) => {
  event.preventDefault();
  let fromMoney = event.target.from.value;
  let typeConvert = event.target.convert.value;
  let result = 0;

  if (typeConvert === "toCop") {
    result = (parseInt(fromMoney) * 4000);
  }

  if (typeConvert === "toDolar") {
    result = (parseInt(fromMoney) / 4000);
  }

  console.log(`${typeConvert} result -> ${result}`);
  document.getElementById('result').innerHTML += result;
}

const Calculator = () => {
  calculatorLayout();
  document.getElementById('calculator-id').addEventListener('submit', calculatorLogic);
  resultLayout();
}

export default Calculator;