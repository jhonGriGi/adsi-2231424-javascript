let baseUrl = "https://picsum.photos";

export const getData = async (urlComplement = '') => {
  try {
    const response = await fetch(`${baseUrl}/v2/list` + urlComplement);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}