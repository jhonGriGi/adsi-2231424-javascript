const baseUrl = "https://www.datos.gov.co/resource/dit9-nnvp.json";

const getDataTRM = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err)
  }
}

export default getDataTRM;