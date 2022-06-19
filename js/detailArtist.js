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
let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}` ;


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

        imgAlbum.innerHTML += `<img src="${data.picture_medium}" alt="" class="img912">`

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


const urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`



fetch(urlCanciones)
.then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);

    let detalle = document.querySelector('.detalles');
    for (let i = 0; i <6; i++) {
    detalle.innerHTML +=`<a href="./detallealbum.html?id=${data.data[i].id}"> <li class="albums">${data.data[i].title}</li> </a>`
    }

}).catch(function(errores) {
  console.log(errores);  
})

