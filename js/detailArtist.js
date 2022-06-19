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
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id'); 
let url1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}` ;


fetch (url1)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        let title = document.querySelector ('h1');
        let imgAlbum = document.querySelector ('.portada');
        let temasAlbum = document.querySelector ('.temasAlbum');

        title.innerText = data.name;
        
        temasAlbum.innerText = data.tracks


        imgAlbum.innerHTML += `<img src="${data.picture_medium}" alt="">`

    })
    .catch(function(error){
        console.log(error);
    })



let albumFav = []
let recuperoStorage = localStorage.getItem ('albumFav');

if (recuperoStorage != null) {
    albumFav = JSON.parse(recuperoStorage);
}

let fav = document.querySelector ('.favoritos');
let botonFav = document.querySelector ('.botonFav')

if (albumFav.includes(id)) {
    botonFav.innerText = 'Quitar de favoritos'
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


const urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`

fetch(urlCanciones)
.then(function (response) {
    return response.json();
}).then(function (canciones) {
    console.log(canciones.data);

let temas = document.querySelector ('.temasAlbum')
    for (let i = 0; i < data.tracks.length; i++) {
        
        console.log(element)
        
        
        temas.innerText+=` <li>${element}</li>`
    }




}).catch(function(errores) {
  console.log(errores);  
})