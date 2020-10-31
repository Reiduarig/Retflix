const fila = document.querySelector('.carousel-container');
const peliculas = document.querySelector('.pelicula');

const left_arrow= document.querySelector('.left-arrow');
const right_arrow= document.querySelector('.right-arrow');

function left_scroll(){
    console.log('left');
    fila.scrollLeft += fila.offsetWidth;
}
function right_scroll(){
    console.log('right');
    fila.scrollLeft -= fila.offsetWidth;
}
