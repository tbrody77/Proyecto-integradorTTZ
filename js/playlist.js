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

const url = 'https://developers.deezer.com/api/chart ';

let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.lista');

let personajesFavoritos = '';

/* Evaluar el localStorage */

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay items en favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < favoritos.length; i++) {
        /* Buscar el personaje */
        const URL = `https://api.deezer.com/chart`; 

        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                personajesFavoritos += `<article>
                                            <img src=${data.image}>
                                            <p>Nombre: ${data.name}</p>
                                            <a href="/detalle.html?id=${data.id}">Ir a detalle</a>
                                            </article> 
                                            <hr>` 
                section.innerHTML = personajesFavoritos;
            }).catch(function (error) {
                console.log(error);
            })
    }
}