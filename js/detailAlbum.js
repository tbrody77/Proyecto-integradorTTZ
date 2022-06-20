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
let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}` ;


fetch (url1)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        let info = data.data;

        
        let title = document.querySelector ('h1');
        let nombreArtista = document.querySelector ('.nombreArtista');
        let nombreGenero = document.querySelector ('.nombreGenero');
        let fechaDeEstreno = document.querySelector ('.fechaDeEstreno');
        let imgAlbum = document.querySelector ('.imgAlbum');
        let temasAlbum = document.querySelector ('.temasAlbum');
        let temas = document.querySelector ('.temas')

        title.innerText = data.title;
        nombreArtista.innerText = data.artist.name
        nombreGenero.innerText = data.genres.data[0].name
        fechaDeEstreno.innerText = data.release_date
        imgAlbum.src = data.cover_medium    
        

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


let urlAlbumCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}/tracks`



fetch(urlAlbumCancion)
.then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);

    for (let i = 0; i < data.data.length; i++) {
        let listaAlbum = document.querySelector('.temasAlbum')
        listaAlbum.innerHTML += `<li>${data[i].title}</li>`
    }
    
}).catch(function(errores) {
  console.log(errores);  
})


