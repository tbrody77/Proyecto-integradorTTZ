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

fav.addEventListener ('click', function (e) {
    e.preventDefault();

    if (albumFav.includes(id)) { 
        let indice = albumFav.indexOf(id);
        albumFav.splice(indice, 1);
        botonFav.innerText = 'Agregar a favoritos'
    } 
    else {
    albumFav.push(id);
        botonFav.innerHTML = 'Quitar de Favoritos';
    }
    console.log(albumFav);
    
    let favsAStirng = JSON.stringify(albumFav);
    localStorage.setItem('albumFav', favsAStirng) 
}) 