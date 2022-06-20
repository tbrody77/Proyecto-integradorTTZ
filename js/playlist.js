let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idPersonaje = qsObjLiteral.get('id');

/*Buscar el personaje*/

const URL = `https://developers.deezer.com/api/chart`;

fetch(URL).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);

    /* Capturo elemento del DOM */
    let etiquetaNombre = document.querySelector('.nombre')
    let etiquetaStatus = document.querySelector('.status')
    let etiquetaEspecie = document.querySelector('.especie')
    let etiquetaImg = document.querySelector('img')

    /* Darle los valores a los elementos */
    etiquetaNombre.innerText = `Nombre: ${data.name}`
    etiquetaStatus.innerText = `Status: ${data.status}`
    etiquetaEspecie.innerText = `Especie: ${data.especie}`
    etiquetaImg.src = data.image;

}).catch(function(error) {
    console.log(error);
});

/* es logica */

let favoritos = [];

/* Recuperar del storage la info */

let recuperoStorage = localStorage.getItem('favoritos')

if(recuperoStorage != null){
    /* Si recupero el storage y me trae algo quiero convertirlo en un tipo de datos de JS */
    favoritos = JSON.parse(recuperoStorage);
};

let fav = document.querySelector('.fav')

if (favoritos.includes(idPersonaje)){
    fav.innerText = 'Quitar de favoritos';
}

fav.addEventListener('click', function(e) {
    e.preventDefault();

    if (favoritos.includes(idPersonaje)) {
        /* Eliminar un elemento del array */

        let indice = favoritos.indexOf(idPersonaje);
        favoritos.splice(indice,1);
        fav.innerText = 'Agregar a favoritos';
    } else {
        favoritos.push(idPersonaje)
        fav.innerText = 'Quitar de favoritos';
    }
    /* Subir info al local storage */

    let favToString = JSON.stringify(favoritos) /* Lo tengo en JSON y JS lo puede modificar */
    localStorage.setItem('favoritos', favToString)


})