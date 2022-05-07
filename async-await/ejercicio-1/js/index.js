async function getText() {
    return "Hello ADSI";
}

function getText2 () {
    return Promise.resolve("Hola ADSI");
}

async function showData() {
    const data = await fetch('url/api/');
    console.log(data);
}

let baseUrl = "https://restcountries.com/v3.1/";
async function setCountries() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    return data;
}

async function infoCountry(pais) {
    const response = await fetch(`${baseUrl}/alpha/${pais}`);
    const data = await response.json();
    if (response.status !== 200)
        throw new Error(`Error${data.message}`);

    
    console.log(data);
    return data;
}

( async () => {
    try {
        const pais = await infoCountry('co');
    } catch (e) {
        console.log(`Error -> ${e}`);
    }
})()