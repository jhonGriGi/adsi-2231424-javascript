const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json";

export const getGovData = async (parameter = '') => {
  let response = await fetch(`${url}${parameter}`);
  let data = await response.json();
  return data;
}