let navegador = document.getElementById('navegador');

let form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (navegador.value == "" || navegador.value.length <= 3) {
        alert("Esta vacio el campo de busqueda o debe ser mayor a 3 caracteres");
    } else {
        this.submit();
    }

})

let proxy = "https://developers.deezer.com/api/track "
let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/track"


let qs= location.search;
letqsOL = new URLSearchParams (qs)
let idPJ = qSOL.get ('id')
console.log(iDPJ)

fetch (endpoint)
fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        ;
    })
 .catch(function(error){
     console.log(error);
 })
