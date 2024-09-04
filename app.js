let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;

}
let indexImagen = 0;
const imagenes = [
    'img/f1.jpg',
    'img/f2.jpg',
    'img/f3.jpg',
    'img/f4.jpg',
    'img/f5.jpg',
    'img/f6.jpg'
];

function abrirModal(src) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-img').src = src;
    indexImagen = imagenes.indexOf(src);

    // Ocultar el menú
    document.querySelector('.contenedor-header').style.display = 'none';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    
    // Mostrar el menú
    document.querySelector('.contenedor-header').style.display = 'block';
}

function cambiarImagen(n) {
    indexImagen += n;
    if (indexImagen >= imagenes.length) {
        indexImagen = 0;
    } else if (indexImagen < 0) {
        indexImagen = imagenes.length - 1;
    }
    document.getElementById('modal-img').src = imagenes[indexImagen];
}

document.querySelectorAll('.galeria-img').forEach((img) => {
    img.addEventListener('click', (event) => {
        abrirModal(event.target.src);
    });
});
