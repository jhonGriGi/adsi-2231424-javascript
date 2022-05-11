import "../style.css";
import PicContainer from "./picsum/components/PicContainer";
import TRMContainer from "./TRM/components/TRMContainer";

const RenderApp = () => {
  document.querySelector("#app").innerHTML = `
  <section class="container-fluid text-center">
        <button class="btn btn-info" id="picsum">Picsum</button>
        <button class="btn btn-info" id="TRM">TRM Api</button>
    <div id="container" ></div>
  </section>
  `;

  document.getElementById("picsum").addEventListener("click", PicContainer);

  document.getElementById("TRM").addEventListener("click", TRMContainer);
};

window.onload = RenderApp;
