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

})*/

let qs = location.search; 
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id');
let url1 = 'https://api.deezer.com/track/' + id;
let playerURL = "https://widget.deezer.com/widget/dark/track/" + id;
let player = document.querySelector('.player');
player.src = playerURL;

fetch (url1)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        let title = document.querySelector('.tituloCancion');
        let imgAlbum = document.querySelector ('.imgAlbum');
        let artista = document.querySelector('.nombreArtista');
        let disco = document.querySelector('.tituloDisco');
        
        title.innerText = data.title;
        disco.innerText = data.album.title;
        artista.innerText = data.artist.name;
        
        imgAlbum.src = data.album.cover;

        
        //temasAlbum.innerText = data.tracks
        //imgAlbum.innerText = data.picture_medium;

        //imgAlbum.innerText = data.cover
 })
    .catch(function(error){
        console.log(error);
    })