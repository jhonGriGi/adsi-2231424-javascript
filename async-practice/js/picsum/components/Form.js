import { setNumPages } from "./pages";
import Cards from "./cards";

const FormLayout = () => {
  let formLayout = `
    <div class="row">
      <div>
        <h1>Picsum Images</h1>
        <form id="form" class="text-center">
          <div class="form-group row">
            <label for="limite" class="col-3 col-form-label text-end">Limite</label>
            <div class="col-2">
              <input type="text" id="limite" class="form-control" name="limite">
            </div>
            <label for="page" class="col-1 col-form-label text-end">Page: </label>
            <div class="col-2">
              <select id="select-page" class="form-control">
              </select>
            </div>
            <div class="col-2 text-start">
              <input type="submit" class="btn btn-success ">
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
  return formLayout;
};

const dataForm = (e) => {
  e.preventDefault();
  let limitValue = document.getElementById("limite").value;
  let pageNum = document.getElementById("select-page").value;
  console.log(limitValue);
  if (limitValue == "") {
    alert("no has puesto un limite");
    return;
  }
  Cards(pageNum, limitValue);
};

const setSelectOptions = (event) => {
  setNumPages(event.target.value);
};

const Form = () => {
  document.getElementById("container").innerHTML = FormLayout();
  document
    .getElementById("limite")
    .addEventListener("change", setSelectOptions);
  document.getElementById("form").addEventListener("submit", dataForm);
};

export default Form;
