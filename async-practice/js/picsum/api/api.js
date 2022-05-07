let baseUrl = "https://picsum.photos";

export const getData = async (urlComplement = '') => {
  const response = await fetch(`${baseUrl}/v2/list` + urlComplement);
  const data = response.json();
  return data;
}