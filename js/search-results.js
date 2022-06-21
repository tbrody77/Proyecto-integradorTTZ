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
let qsto = new URLSearchParams (qs);
let searchRes = qsto.get("search");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${searchRes}`)

.then( function(response){
    return response.json()
})
.then( function(busqueda){
    console.log(busqueda.data);

   let resultados = busqueda.data;
   let resultadosB = document.querySelector(".articleS");
   let encabezado = document.querySelector("#busqueda")

    if (searchRes == null && searchRes != resultados) {
        encabezado.innerHTML = '<p>No hay coincidencias</p>';
    } else{
        encabezado.innerText += ` ${searchRes}`
        for(let i = 0; i < busqueda.data.length; i++){
            resultadosB.innerHTML += `
            <div class="divS"> 
            <a href="./detailsong.html?id=${busqueda.data[i].id}" class="aSearch"?id=${busqueda.data[i].id}"><img  class="imgS" src=${busqueda.data[i].album.cover}></a>
             <a class="ahome" href="./detailsong.html?id=${busqueda.data[i].id}" class="aSearch""><h4  class="h4Search" >${busqueda.data[i].title}</h4></a> 
            </div>
            `

    }}


}).catch(function (error) {
    console.error(error)
})