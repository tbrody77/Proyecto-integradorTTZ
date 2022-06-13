// Pegar formulario de cacha




    let qs = location.search; 
    let qtso = new URLSearchParams(qs);
    let id = qtso.get('id'); 
    
    let url = 
    `https://api.themoviedb.org/3/tv/${id}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`
    
    fetch (url)
        .then (function (response) {
            return response.json()
        })
        .then (function (data) {
            console.log(data);
    
            //Capturo los elementos del DOM
            let title = document.querySelector ('h1');
            let rating = document.querySelector ('.rating');
            let releaseDate = document.querySelector ('.fechaDeEmision');
            let numberOfEpisodes = document.querySelector ('.duracion');
            let sinopsis = document.querySelector ('.sinopsis');
            let genre = document.querySelector ('.genero');
            let imgLaptop = document.querySelector ('.imgLaptop');
            let imgMobile = document.querySelector ('.imgMobile')
            let tituloPagina = document.querySelector ('title')
    
            //Actualizo el DOM
            title.innerText = data.name;
            rating.innerText = `Rating: ${data.vote_average}/10`;
            releaseDate.innerText = `First Aired: ${data.first_air_date},`;
            numberOfEpisodes.innerText = `${data.number_of_episodes} episodes - ${data.number_of_seasons} seasons, `
            sinopsis.innerText = data.overview
            tituloPagina.innerText = `${data.name} - Moovify`
    
            let string = ''
            for (let i = 0; i < data.genres.length; i++) {
                const element = data.genres[i];
                
                string += `| <a href="./detail-genres.html?id=${element.id}&name=${element.name}&categoria=pelicula">${element.name}</a> | `
            }
    
            genre.innerHTML = string
    
    
    
            imgLaptop.src = `https://image.tmdb.org/t/p/w154/${data.poster_path}`
            imgLaptop.alt = data.title;
            imgMobile.src = `https://image.tmdb.org/t/p/w154/${data.backdrop_path}`
            imgMobile.alt = data.title
    
    
    
    
        })
        .catch (function (error) {
            console.log(error);
        })
    
        //Backdrop para mobile, poster para laptop
    
    
     
    //Boton de Favoritos
    
    //Creo array a rellenar de peliculas favoritas
    let seriesFav = []
    
    //Recupero el storage
    let recuperoStorage = localStorage.getItem ('seriesFav');
    
    //Reviso si el id ya esta en favoritos
    if (recuperoStorage != null) { //Sucede si hay datos en el storage
        
        seriesFav = JSON.parse(recuperoStorage);
    }
    
    //Capturo el elemento en el DOM
    let fav = document.querySelector ('.favoritos');
    let botonFav = document.querySelector ('.botonFav')
    
    if (seriesFav.includes(id)) {
        botonFav.innerText = 'Quitar de favoritos'
    } 
    
    
    fav.addEventListener ('click', function (evento) {
        evento.preventDefault();
    
        //En el caso de que la pelicula ya este en favoritos y el usuario quiera sacarla
        if (seriesFav.includes(id)) { 
            let indice = seriesFav.indexOf(id);
            seriesFav.splice(indice, 1);
            botonFav.innerText = 'Agregar a favoritos'
    
    
        } else {
        //En el caso de que la pelicula no este en favoritos
            seriesFav.push(id);
            botonFav.innerHTML = 'Quitar de Favoritos';
        }
    
        //Guardo el array en el storage
        let favsToStirng = JSON.stringify(seriesFav); //Se transforma al array en una cadena de texto
        
        localStorage.setItem('seriesFav', favsToStirng) //Guardo la info en el storage
    
        console.log(seriesFav);
    
    })
     
    })