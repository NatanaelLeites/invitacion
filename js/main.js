'use strict'

/* GSAP animaciones */
/* con id myText */
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 1.7,
    text: "15 Aithana",
    ease: "none",
});
/* con nombre de clase del contenedor */
gsap.from(".container2", {
    y: -100,
    opacity: 0,
    duration: 1,
});
/* ScrollReveal */
/* con nombre de clase del contenedor */
ScrollReveal().reveal('h1', {
    delay: 0,
    origin: 'left',
    duration: 2000,
    distance: '100%'
});
/* con nombre de clase del contenedor */
/* ScrollReveal().reveal('.hero', {
    delay: 200,
    origin: 'center',
    duration: 2000,
    distance: '50%'
});
 */
/* ScrollReveal().reveal('.equipo-container', {
    delay: 200,
    origin: 'right',
    duration: 2000,
    distance: '50%'
   }); */