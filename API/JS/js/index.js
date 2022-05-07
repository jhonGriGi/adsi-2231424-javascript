import { printHTML } from "./basic-interface.js";
import { municipios } from "./gov-api/municipios.js";
import {coinMarket} from "./api/api.js";

coinMarket()
printHTML()
document.getElementById('municipio').addEventListener('click', municipios);
