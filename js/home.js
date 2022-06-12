let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks'

fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data.data);

    let info = data.results; 
        
        let canciones = document.querySelector('.articleCanciones');
        let elementosLista = ''

    
        for(let i=0; i<6; i++){
            elementosLista += `<article class="art-series">
                                    <a class="peli" href="./detail-series.html?id=${info[i].id}" > 
                                        <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt="${info[i].name}">
                                        <p class="titulopeli">${info[i].name}</p>
                                        <p class="fecha">${info[i].first_air_date}</p>
                                    </a>
                                </article>`    
        }
        canciones.innerHTML = elementosLista;
}).catch(function(error){
    console.log(error);
})   