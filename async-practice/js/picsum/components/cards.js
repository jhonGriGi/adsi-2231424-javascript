import { getData } from "../api/api"

const CardLayout = (data) => {
  let pictures = data.filter((picture) => picture.width > picture.height);
  pictures.map((picture) => {
    document.getElementById('pictures').innerHTML += `
      <div class="w-25 m-2 p-3 rounded border shadow-sm">
        <img class="img-fluid rounded" src="https://picsum.photos/id/${picture.id}/${picture.width}/${picture.height}">
        <h3>${picture.author}</h3>
      </div>
    `
  })
}

const Cards = async (inputValue) => {
  let urlComplement = '';
  if (inputValue !== '')
    urlComplement = `?limit=${inputValue}`;
  let data = await getData(urlComplement);
  document.getElementById("container").innerHTML += `
    <div id="pictures" class="d-flex justify-content-around flex-wrap col-10 offset-1">
    </div>
  `;
  CardLayout(data);
}

export default Cards;