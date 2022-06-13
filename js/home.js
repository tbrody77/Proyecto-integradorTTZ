<<<<<<< HEAD
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
=======
let URL = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks'

fetch(URL).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data.data);

    let info = data.results; 
        
        let canciones = document.querySelector('.articleCanciones');
        let elementosLista = ''

    // preguntar por LINEA 17 COMO PONER LA FOTO
        for(let i=0; i<6; i++){
            elementosLista += `<div class="padre">
                                    <a class="" href="./detailsong.html?id=${info[i].id}"> 
                                        <img src=       ${info[i].album.cover} alt="${info[i].title}"> 
                                        <p class="nombrecancion">${info[i].title}</p>
                                        <p class="cantante">${info[i].artist.name}</p>
                                    </a>
                                </div>`    
        }
        canciones.innerHTML = elementosLista;
}).catch(function(error){
    console.log(error);
})   







let URLAlbum = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"

fetch(URLAlbum)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.data);
        let info = data.results;
        
        let albums = document.querySelector('.articleAlbum');
        let elementosLista = ''

        
        for(let i=0; i<6; i++){
            elementosLista += `<div class="padre1">
                                    <a class="peli" href="./detail-album.html?id=${info[i].id}" > 
                                        <img src=      ${info[i].cover} alt="${info[i].title}">
                                        <p class="tituloAlbum">${info[i].title}</p>
                                        <p class="albumDe">${info[i].artist.name}</p>
                                    </a>
                                </div>` 
        }
    

        albums.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })


    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);
        let info = data.results; 
        
        let cantantes = document.querySelector('.articleCantantes');
        let elementosLista = ''

        
        for(let i=0; i<6; i++){
            elementosLista += `<div class="cantantesPopulares">
            <a class="peli" href="./detail-movies.html?id=${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt="${info[i].title}">
                <p class="titulopeli">${info[i].title}</p>
                <p class="fecha">${info[i].release_date}</p>
            </a>
        </div>`
        }
        

        
        cantantes.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    }) 
>>>>>>> b8d9e81895c66c9911bd83ad2b985ae5ee282fab
