// document.getElementById('myform')
//     .addEventListener("submit", (e) => {
//         e.preventDefault();
//         const data = new FormData(e.target);
//         // const data = new FormData(document.getElementById('myform'));

//         const XMLHttpRequestObject = new XMLHttpRequest();
//         const url = "XMLHttpReqProccess.php";

//         XMLHttpRequestObject.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.responseText);
//             }
//         }

//         XMLHttpRequestObject.open("POST", url);
//         XMLHttpRequestObject.send(data);
//     })

document.getElementById('myform')
    .addEventListener("submit", ajax);

function ajax(event) {
    event.preventDefault();

    let myform = document.getElementById('myform');
    const XMLHttpRequestObject = new XMLHttpRequest();
    const url = "XMLHttpReqProccess.php";

    XMLHttpRequestObject.addEventListener('load', result);
    XMLHttpRequestObject.open('POST', url);
    XMLHttpRequestObject.send(new FormData(myform));
} 

function result() {
    console.log("evento load>", this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
}