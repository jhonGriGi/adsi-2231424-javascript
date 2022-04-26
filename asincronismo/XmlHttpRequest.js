const btn = document.getElementById('btn_aceptar')
    .addEventListener("click", ajax);

function ajax() {
    console.log('Ejecucion funcion ajax');
    let data = new FormData();
    data.append("num1", 3);
    data.append("num2", 8);

    const XMLHttpRequestObject = new XMLHttpRequest();
    const url = "XMLHttpReqProcess.php";

    XMLHttpRequestObject.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else {
            console.log("estados 1, 2 y 3");
        }
    }

    XMLHttpRequestObject.open("POST", url);
    XMLHttpRequestObject.send(data);
}