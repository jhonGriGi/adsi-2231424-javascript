export const printHTML = () => {
  document.getElementById("app").innerHTML = `
    <section class="text-center col-10 offset-1 mt-3">
      <button class="btn btn-success" id="">A</button>
      <button class="btn btn-success" id="municipio">Buscar municipio</button>
      <div id="contenido"></div>
    </section>
  `;
};
