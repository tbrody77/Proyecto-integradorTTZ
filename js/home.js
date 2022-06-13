let URL = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks'

fetch(URL).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data.data);

    let info = data.data; 
        
        let canciones = document.querySelector('.articleCanciones');
        let elementosLista = ''

    // preguntar por LINEA 17 COMO PONER LA FOTO
        for(let i=0; i<6; i++){
            elementosLista += `<div class="padre">
                                    <a class="" href="./detailsong.html?id=${info[i].id}"> 
                                        <p class="nombrecancion">${info[i].title}</p>
                                        <img src= "${info[i].album.cover}" alt="${info[i].title}"> 
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
        let info = data.data;
        
        let albums = document.querySelector('.articleAlbum');
        let elementosLista = ''

        
        for(let i=0; i<6; i++){
            elementosLista += `<div class="padre1">
                                    <a class="peli" href="./detail-album.html?id=${info[i].id}" > 
                                        <img src=${info[i].cover} alt="${info[i].title}">
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


    
    
    
    let URLCantantes = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
    
    
    fetch(URLCantantes)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.data);
        let info = data.data; 
        
        let cantantes = document.querySelector('.articleCantantes');
        let elementosLista = ''

        
        for(let i=0; i<6; i++){
            elementosLista += `<div class="cantantesPopulares">
            <a href="./detail-artist.html?id=${info[i].id}" class="canciones">
            <img src="     ${info[i].picture}" alt="${info[i].name}">
            <p class="nombreCantante">${info[i].name}</p>  <br>
            </a>
           </div>`
        }
        cantantes.innerHTML = elementosLista;
    })
    .catch(function(error){
        console.log(error);
    }) 