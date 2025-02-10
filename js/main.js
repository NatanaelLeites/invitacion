'use strict'

/* GSAP animaciones */
/* con id myText */
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 1.7,
    text: "15 Aitana",
    ease: "none",
});

/* con nombre de clase del contenedor */
ScrollReveal().reveal('h1', {
    delay: 0,
    origin: 'left',
    duration: 2000,
    distance: '100%'
});
/* con nombre de clase del contenedor */
ScrollReveal().reveal('.countdown', {
    delay: 200,
    origin: 'center',
    duration: 2000,
    distance: '50%'
});
/* con nombre de clase del contenedor */
gsap.from(".mapa", {
    y: -100,
    opacity: 0,
    duration: 1,
});

/* ScrollReveal().reveal('.footer', {
    delay: 200,
    origin: 'right',
    duration: 1000,
    distance: '50%'
   });
 */
/* Cuenta regresiva */
const days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

const cumple = new Date('March 22, 2025 21:00:00').getTime();
setInterval(() => {
    let hoy = new Date().getTime();
let tiempoRestante = cumple - hoy;

let dias = Math.floor(tiempoRestante / 86400000);
let horas = Math.floor(tiempoRestante / 3600000) % 24;
let minutos = Math.floor(tiempoRestante / 60000) % 60;
let segundos = Math.floor(tiempoRestante / 1000) % 60;

days.innerHTML = dias
hours.innerHTML = horas
min.innerHTML = minutos
sec.innerHTML = segundos

if(dias < 10){days.innerHTML = "0" + dias}
if(horas < 10){hours.innerHTML = "0" + horas}
if(minutos < 10){min.innerHTML = "0" + minutos}
if(segundos < 10){sec.innerHTML = "0" + segundos}

}, 1000);
