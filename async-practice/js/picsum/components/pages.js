let numPages = 0;

const PagesCounterLayout = () => {
  let layout = "";
  for (let i = 1; i <= numPages; i++) {
    layout += `
      <option value="${i}">${i}</option>
    `;
  }
  document.getElementById("select-page").innerHTML += layout;
};

export const setNumPages = (num) => {
  numPages = Math.ceil(1000 / num);
  console.log(numPages);
  PagesCounterLayout();
};