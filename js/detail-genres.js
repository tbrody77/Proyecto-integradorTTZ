<<<<<<< HEAD
let qs = location.search; 
let qtso = new URLSearchParams(qs); 
let id = qtso.get('id'); 
console.log(id);
=======
let qs = location.search;
let qtso = new URLSearchParams(qs);
let id = qtso.get("idGenero");
console.log(id);

>>>>>>> 32c1fe2defcfa3cc8d16c83edf038e73ec923c30
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
<<<<<<< HEAD

        

        
=======
>>>>>>> 32c1fe2defcfa3cc8d16c83edf038e73ec923c30

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

