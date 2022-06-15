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

let qs = location.search;
let qsOL = new URLSearchParams(qs)
let id = qsOL.get("idGenero")

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data)
document.querySelector(".contenedorGenero").innerHTML +=`<h2 class="generoDetalleG" >Genero: ${data.name}</h2>`
})

.catch(function(error){
    console.log(error);
})
