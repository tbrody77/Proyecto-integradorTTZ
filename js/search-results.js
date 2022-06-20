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

let objeto = new URLSearchParams (location.search);
let search = objeto.get("search");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search}`)

.then( function(respuesta){
    return respuesta.json()
})
.then( function(busqueda){
    console.log(busqueda.data);
    
    let resultados = busqueda.data;
    let resultadosB = document.querySelector(".articulo1");
    let encabezado = document.querySelector("#busqueda");
    
    encabezado.innerText += `${search}`
    for(let i = 0; i < 12; i++){


            resultadosB.innerHTML += `
            


            <div class="div1"> 
        <a href="detallecancion.html" class="sinDelineado"?id=${busqueda.data[i].id}"><img  class="foto" src=${busqueda.data[i].album.cover}></a>
        <a class="ahome" href="detallecancion.html" class="sinDelineado""><h4  class="albums2322" >${busqueda.data[i].title}</h4></a> 
        </div>
            `

    }
}).catch(function (error) {
    console.error(error)
})