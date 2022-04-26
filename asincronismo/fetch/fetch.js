let myform = document.getElementById('myform');
myform.addEventListener("submit", ajax);

function ajax(event) {
    event.preventDefault();
    const url = "test.php";
    fetch(url, {
        method: "POST",
        body: new FormData(myform)
    })
    .then(Response => {
        if (Response.ok)
            return Response.text();
        else
            throw new Error("Error en la llamada");
    })
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    })
    .catch(error => console.log(error));
}