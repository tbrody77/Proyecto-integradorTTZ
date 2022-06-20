let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idDetalle = qsToObject.get('id');

let generos = document.querySelector("#generosid");
let artist = document.querySelector('.contenedorGenero');


let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idDetalle}/`;
fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        document.querySelector(".contenedorGenero").innerHTML += `<h2> Genero: ${data.name}</h2>`;   
    
    //artistas
let url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idDetalle}/artists`;
fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log("artista",data.data);

<<<<<<< HEAD

        for (let i = 0; i < data.data.length; i++) {
            
           document.querySelector('.artistas').innerHTML += `<div class="divartistas"> 
            <img class="imagenartistas" src="${data.data[i].picture}" alt="" height="100px" width="100px"></div>
            <a class="divartistas" href="./detail-artist.html?id=${data.data[i].id}">${data.data[i].name}</a>
             `
            
        }
        })


        //section.style.display = "flex";
        //section.style.flexDirection = "row";
=======
})


let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idDetalle = qsToObject.get('id');


let url1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDetalle}`;

let url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDetalle}/artists/`;

fetch(url1)
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
        let nombre = document.querySelector(".divDG");
        nombre.innerHTML = `<strong>${data.name}</strong>`;
        nombre.innerHTML = '<strong>' + data.name + '</strong>';
>>>>>>> 7539471aa399a91cbe5471543939f6b6e46e2919
    

         
        
    })
    .catch(function(error){
        console.log(error);
    })
<<<<<<< HEAD
 
=======
    
    //artistas

fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

         info = data.data;
        let section =  document.querySelector('.sectionDG');
        let title = document.querySelector('.tDG');
        let image = document.querySelector('.imagenDG');

        title.innerText = info.title;
        image.src = info.picture;

        let articles = "";

        for (let i = 0; i < info.length; i++) {
            
           articles += `<article class="articleDG"> 
            <img class="imagenDG" src="${data.data[i].picture_big}" alt="" height="100px" width="100px">
            <p class="pDG"><a class="pDG" href="./detail-artist.html?id=${data.data[i].id}">${data.data[i].name}</a></p>
                </article> `
            
        }

        section.innerHTML = articles;
        section.style.display = "flex";
        section.style.flexDirection = "row";
    

         
        
    })
    .catch(function(error){
        console.log(error);
    })
>>>>>>> 7539471aa399a91cbe5471543939f6b6e46e2919
