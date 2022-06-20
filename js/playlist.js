let navegador = document.getElementById('navegador');

/*
let form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (navegador.value == "" || navegador.value.length <= 3) {
        alert("Esta vacio el campo de busqueda o debe ser mayor a 3 caracteres");
    } else {
        this.submit();
    }
    
})
*/

const url = 'https://api.allorigins.win/raw?url=https://developers.deezer.com/api/chart ';

let fav_arr = JSON.parse(localStorage.getItem('favs'));
//let favoritos = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.songArticles');

let personajesFavoritos = '';

/* Evaluar el localStorage */

if (fav_arr == null || fav_arr.length == 0) {
    section.innerHTML = '<p>No hay items en Favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < fav_arr.length; i++) {
        /* Buscar el personaje */
        let id = fav_arr[i];
        const URL = 'https://api.deezer.com/track/' + id;

        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                personajesFavoritos += `<a href="/detailsong.html?id=${id}">
                                            <article>
                                                <img src=${data.album.cover}>
                                                <p>Nombre: ${data.title}</p>
                                                
                                                </article> 
                                                <hr></a>` 
                                                
                section.innerHTML = personajesFavoritos;
            }).catch(function (error) {
                console.log(error);
            })
    }
}