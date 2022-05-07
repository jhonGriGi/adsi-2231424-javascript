import Cards from "./cards";

const FormLayout = () => {
  let formLayout = `
    <div class="row">
      <div >
        <h1>Picsum Images</h1>
        <form id="form" class="text-center">
          <div class="form-group row">
            <label for="limite" class="col-5 col-form-label text-end">Limite</label>
            <div class="col-2">
              <input type="text" id="limite" class="form-control" name="limite">
            </div>
            <div class="col-4 text-start">
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
  let inputValue = document.getElementById("limite").value;
  console.log(inputValue);
  if (inputValue == "") {
    alert("no has puesto un limite");
    return;
  }
  Cards(inputValue);
};

const Form = () => {
  document.getElementById("container").innerHTML = FormLayout();
  document.getElementById("form").addEventListener("submit", dataForm);
};

export default Form;
