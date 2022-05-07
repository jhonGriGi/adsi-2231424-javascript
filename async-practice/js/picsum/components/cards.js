import { getData } from "../api/api";
import { DownloadIcon, EyeIcon } from "../assets/icons";

const downloadIcon = DownloadIcon;
const eyeIcon = EyeIcon;

const CardLayout = (data) => {
  let pictures = data.filter((picture) => picture.width > picture.height);
  pictures.map((picture) => {
    document.getElementById("pictures").innerHTML += `
      <div class="w-25 m-2 p-3 rounded border shadow-sm">
        <img class="img-fluid rounded" src="https://picsum.photos/id/${picture.id}/${picture.width}/${picture.height}">
        <h3>${picture.author}</h3>
        <p><strong>Width: </strong>${picture.width}, <strong>Height: </strong>${picture.height}</p>
        <a class="btn btn-info text-white my-3" href="${picture.url} target="_blank"">
          ${eyeIcon} Visit the page
        </a>
        <a class="btn btn-success text-white my-3 px-4" href="${picture.download_url}" target="_blank">
          ${downloadIcon} Download
        </a>
      </div>
    `;
  });
};

const Cards = async (pageNum, inputValue) => {
  let urlComplement = "";
  if (inputValue !== "") urlComplement = `?page=${pageNum}&limit=${inputValue}`;
  let data = await getData(urlComplement);
  document.getElementById("container").innerHTML += `
    <div id="pictures" class="d-flex justify-content-around flex-wrap col-10 offset-1">
    </div>
  `;
  CardLayout(data);
};

export default Cards;
