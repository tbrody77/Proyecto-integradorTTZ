let qs = location.search; 
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id'); 
console.log(id);
let generos = document.querySelector("#generosid");
let artist = document.querySelector('.contenedorGenero');


let url1 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;
fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        document.querySelector(".contenedorGenero").innerHTML += `<h2> Genero: ${data.name}</h2>`;   
    
    //artistas
let url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`;
fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.data);

        

        

        // for (let i = 0; i < data.data.length; i++) {
            
        //    document.querySelector('.artistas').innerHTML += `<div class="divartistas"> 
        //     <img class="imagenartistas" src="${data.data[i].picture}" alt="" height="100px" width="100px"></div>
        //     <a class="divartistas" href="./detail-artist.html?id=${data.data[i].id}">${data.data[i].name}</a>
        //      `
            
        // }
        })


        //section.style.display = "flex";
        //section.style.flexDirection = "row";
})

    .catch(function(error){
        console.log(error);
    })

