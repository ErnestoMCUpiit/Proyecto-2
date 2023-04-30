const fotosLibros = [
    'images/libros/1984.jpg',
    'images/libros/cryptonomicon.jpg',
    'images/libros/cutulu.jpg',
    'images/libros/foundation.jpg',
    'images/libros/foundation-empire.jpg',
    'images/libros/foundation-second.jpg',
    'images/libros/gyp.jpg',
    'images/libros/harlequin.jpg',
    'images/libros/homenaje.jpg',
    'images/libros/laciudad.jpg',
    'images/libros/monañas.jpg',
    'images/libros/necronomicon.png',
    'images/libros/no-mouth.jpg',
    'images/libros/revelionenlagranja.jpg',
    'images/libros/seveneves.jpg',
    'images/libros/shouted-love.jpg',
    'images/libros/snow-crash.jpg'
];
const fotosAutor=[
    'images/autores/george-orwell.jpg',
    'images/autores/harlan-ellison.jpg',
    'images/autores/isaac_asimov.jpg',
    'images/autores/leontolstoi.jpg',
    'images/autores/lovecraft.jpg',
    'images/autores/neal-stephenson.jpg'
];

let currentIndex = 0;
const maxIndex = fotosLibros.length - 1;
const imgActual = document.querySelector('#actual img');
const imgBefore = document.querySelector('#bf img');
const imgAfter = document.querySelector('#af img');

let currentIndex2=0;
const maxIndex2 = fotosAutor.length - 1;
const imgActual2 = document.querySelector('#actual2 img');
const imgBefore2 = document.querySelector('#bf2 img');
const imgAfter2 = document.querySelector('#af2 img');

function updateBook() {
    imgActual.src = fotosLibros[currentIndex];
    imgBefore.src = fotosLibros[currentIndex === 0 ? maxIndex : currentIndex - 1];
    imgAfter.src = fotosLibros[currentIndex === maxIndex ? 0 : currentIndex + 1];
    currentIndex = (currentIndex + 1) % fotosLibros.length;

    imgActual2.src = fotosAutor[currentIndex2];
    imgBefore2.src = fotosAutor[currentIndex2 === 0 ? maxIndex2 : currentIndex2 - 1];
    imgAfter2.src = fotosAutor[currentIndex2 === maxIndex2 ? 0 : currentIndex2 + 1];
    currentIndex2 = (currentIndex + 1) % fotosAutor.length;
}

updateBook();
setInterval(updateBook, 10000);
