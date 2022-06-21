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
        const URL = 'https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + id;

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
let albumFav = JSON.parse(localStorage.getItem('albumFav'));
console.log(albumFav);
//let favoritos = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section2 = document.querySelector('.albumArticles');

let personajesFavoritos2 = '';

/* Evaluar el localStorage */

if (albumFav == null || albumFav.length == 0) {
    section.innerHTML = '<p>No hay items en Favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < albumFav.length; i++) {
        /* Buscar el personaje */
        let id2 = albumFav[i];
        const URL2 = 'https://api.allorigins.win/raw?url=https://api.deezer.com/album/' + id2;

        fetch(URL2)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                personajesFavoritos2 += `<a href="./detail-album.html?id=${data.id}">
                                            <article>
                                                <img src=${data.cover_medium}>
                                                <p>Nombre: ${data.title}</p>
                                                
                                                </article> 
                                                <hr></a>` 
                                                
                section2.innerHTML = personajesFavoritos2;
            }).catch(function (error) {
                console.log(error);
            })
    }
}
