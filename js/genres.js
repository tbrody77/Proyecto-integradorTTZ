let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;
 
fetch(urlUser)
    .then(function(response){
        return response.json()
    })
    .then(function(generos){
        console.log(generos.data);
        let section = document.querySelector(".sectionDG");
        let contenedor = "";

        for (let i = 0; i < generos.data.length; i++) {
            contenedor += `<article class="articleGenero">
                                        <a href="./detail-genres.html?idGenero=${generos.data[i].id}">
                                        <p class="nombreGenero">${generos.data[i].name}</p>
                                        <img src=${generos.data[i].picture_medium} alt="${generos.data[i].name}">
                                        </a>
                            
                                    </article>`
        }
        section.innerHTML = contenedor;
        section.style.display = "flex";
        section.style.flexDirection = "row";
    
  
    })
    .catch(function(error){
        console.log(error);
    }) 
    





