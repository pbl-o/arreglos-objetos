/*Los archivos son importados para ser utilizados en el main (una especie de manager) */


import propAlquiler from "./data/alquiler.js";
import propVenta from "./data/venta.js";
import displayPropiedadesLoop from "./utils/templateCard.js";
import heroCard from "./utils/heroCard.js";
import botonMenuDisplay from "./utils/menu.js";
//Vitrinas de index.html
const vitrinaVenta = document.getElementById("vitrina-venta");
const vitrinaAlq = document.getElementById("vitrina-alquiler");
// Vitrinas  de propiedades-venta.html y propieades-alquiler.html respectivamente. 
const totalVenta = document.getElementById("venta-total");
const totalAlq = document.getElementById("alquiler-total");
// Botón menu y su contenedor
const menuBtn = document.getElementById("boton-menu-desplegable");
const modalBtn = document.getElementById("desplegable-body");
// Contenedor de vitrinas, espacio para mostrar detalle de imagen (hero).
const contendor = document.querySelector(".contenedor-main");

/*

No conseguí seleccionar TODOS elementos y renderizarlos TODOS en el documento:   

En la clase y en stackoverflow vi que usaban un event listener que corroboraba la existencia de los elementos seleccionados al momento de cargar el documento:

document.addEventListener('DOMContentLoaded', ()=>{
  const nombre = document.querySelector('class/id/tag') x (cantidad de veces necesaria)
  (selectedElement) ? selectedElement.innerHTML = ()=> ... x (cantidad de metodos necesaria)
});

No obstante, al agregar el atritbuto type="module" a los script, probé lo que está abajo y funcionaba de igual manera, se corrobora la presencia del elemento en el documento y se inyecta el resultado de la función en el elemento html.

*/


//Renderizado de galerias de cards.
vitrinaVenta ? (vitrinaVenta.innerHTML = displayPropiedadesLoop(propVenta, 3)) : "is null";
vitrinaAlq ? (vitrinaAlq.innerHTML = displayPropiedadesLoop(propAlquiler, 3)) : "is null";
totalVenta ? (totalVenta.innerHTML = displayPropiedadesLoop(propVenta, propVenta.length)) : "is null";
totalAlq ? (totalAlq.innerHTML = displayPropiedadesLoop(propAlquiler, propAlquiler.length)) : "is null";
menuBtn && modalBtn ? botonMenuDisplay(menuBtn, modalBtn) : "is null";

//visuaizar elemento clickeado en pantalla
contendor ? heroCard(contendor) : "is null";
