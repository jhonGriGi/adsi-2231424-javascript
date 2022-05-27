import Calculator from "./calculator";
import History from "./History";

const TRMContainer = () => {
  document.getElementById('container').innerHTML = "";
  Calculator();

  // ********************************************************************************
  // ********* Comentar este bloque para que funcione la calculadora ****************
  // document.getElementById("container").innerHTML += `
  //   <button class='btn btn-info mt-3' id="history">View History</button>
  //   <section id="trm-container"></section>
  // `;
  // History();
  // ********************************************************************************
}

export default TRMContainer;