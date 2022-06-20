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

let fav_arr = JSON.parse(localStorage.getItem('favs'));
let botonFav = document.querySelector('.botonFav');
if (fav_arr != null && fav_arr.includes(id)) {
    botonFav.innerText = 'Quitar de favoritos';
}

let songName;
fetch (url1)
    .then (function (response) {
        console.log(response);
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        let title = document.querySelector('.tituloCancion');
        let imgAlbum = document.querySelector ('.imgAlbum');
        let artista = document.querySelector('.nombreArtista');
        let disco = document.querySelector('.tituloDisco');
        
        title.innerText = data.title;
        songName = data.title;
        disco.innerText = data.album.title;
        artista.innerText = data.artist.name;
        
       // imgAlbum.src = data.album.cover;

        
        //temasAlbum.innerText = data.tracks
        //imgAlbum.innerText = data.picture_medium;

        imgAlbum.innerText = data.cover
 })
    .catch(function(error){
        console.log(error);
    })


function addToPlaylist(){
    if (fav_arr == null) {
        alert('Se agrego ' + songName + ' a la playlist');
        let newArr = [];
        newArr.push(id);
        localStorage.setItem('favs', JSON.stringify(newArr));
        botonFav.innerText = 'Quitar de favoritos';
    }
    else if (!fav_arr.includes(id)) {
        alert('Se agrego ' + songName + ' a la playlist');
        fav_arr.push(id);
        localStorage.setItem('favs', JSON.stringify(fav_arr));
        botonFav.innerText = 'Quitar de favoritos';
    }
    else {
        alert('Se quito ' + songName + ' de la playlist');
        fav_arr = fav_arr.filter(item => item !== id)
        localStorage.setItem('favs', JSON.stringify(fav_arr));
        botonFav.innerText = 'Añadir a playlist';
    }
}