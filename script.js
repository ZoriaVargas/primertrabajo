let indice = 0;

const slides = document.querySelector(".slides");
const listaSlides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");

const totalSlides = listaSlides.length;

function mostrarSlide(){

slides.style.transform = "translateX(-" + (indice * 100) + "%)";

puntos.forEach(p => p.classList.remove("activo"));

if(puntos[indice]){
puntos[indice].classList.add("activo");
}

}

function cambiarSlide(direccion){

indice += direccion;

if(indice < 0){
indice = totalSlides - 1;
}

if(indice >= totalSlides){
indice = 0;
}

mostrarSlide();

}

function irSlide(n){

indice = n;
mostrarSlide();

}

setInterval(() => {

indice++;

if(indice >= totalSlides){
indice = 0;
}

mostrarSlide();

},4000);

let inicioX = 0;

const carrusel = document.querySelector(".carousel");

carrusel.addEventListener("touchstart", e => {
inicioX = e.touches[0].clientX;
});

carrusel.addEventListener("touchend", e => {

let finX = e.changedTouches[0].clientX;

if(inicioX - finX > 50){
cambiarSlide(1);
}

if(finX - inicioX > 50){
cambiarSlide(-1);
}

});

mostrarSlide();