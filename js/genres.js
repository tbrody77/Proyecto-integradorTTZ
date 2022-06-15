let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;
 
fetch(urlUser)
    .then(function(response){
        return response.json()
    }).then(function(generos){
        console.log(generos)
        let contenedor = document.querySelector(".listaGenero");

        for (let i = 0; i < generos.data.length; i++) {
            contenedor.innerHTML += `<li>
                                        <a href="./detail-genres.html?idGenero=${generos.data[i].id}">${generos.data[i].name}
                                        <img class:"imgGenres" src=${generos.data[i].picture_medium} alt="${generos.data[i].name}">
                                        </a>
                            
                                    </li>`
        }

         
        
    })
    .catch(function(error){
        console.log(error);
    }) 
    





