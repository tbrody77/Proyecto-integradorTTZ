let qs = location.search;
let qtso = new URLSearchParams(qs);
let id = qtso.get("idGenero");
console.log(id);

let generos = document.querySelector("#generosid");
let artist = document.querySelector('.contenedorGenero');


let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;
fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.name);
        document.querySelector(".contenedorGenero").innerHTML += `<h1 id="generosid"> Genero: ${data.name}</h1>`;   
    
    //artistas
let url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`;
fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.data);

        let section = document.querySelector(".sectionDG");
        let contenedor = "";

        for (let i = 0; i < data.data.length; i++) {
            
           contenedor += `<article class="articleArtistas">
            <a class="aDG" href="./detail-artist.html?id=${data.data[i].id}"> 
            <img class="imagenArtistas" src="${data.data[i].picture}" alt="" height="100px" width="100px">
            <p class = "pDG">${data.data[i].name}</p></a>
            </article>`
            
        }
        section.innerHTML = contenedor;
        section.style.display = "flex";
        section.style.flexDirection = "row";
        })
        
})

    .catch(function(error){
        console.log(error);
    })