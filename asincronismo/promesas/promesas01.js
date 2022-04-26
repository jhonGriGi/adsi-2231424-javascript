let promesaYes = () => {
    return new Promise((resolve, reject) => {
        resolve(resolveFunc); // Resuelve la promesa
        reject(rejectFunc); // Rechaza la promesa
    })
}

promesaYes()
    .then(() => console.log("then"))
    .catch(error => console.log(error))