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
    

         
        
    })
    .catch(function(error){
        console.log(error);
    })
    
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