import { printHTML } from "./basic-interface.js";
import { CoinMarket } from "./CoinMarket/coinMarket.js";
import { municipios } from "./gov-api/municipios.js";

printHTML()
document.getElementById('municipio').addEventListener('click', municipios);
document.getElementById("coin-market").addEventListener("click", CoinMarket);
