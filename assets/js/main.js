import propAlquiler from "./data/alquiler.js";
import propVenta from "./data/venta.js";
import displayPropiedadesLoop from "./templateCard.js";
import heroCard from "./heroCard.js";
import botonMenuDisplay from "./menu.js";

const vitrinaVenta = document.getElementById("vitrina-venta");
const vitrinaAlq = document.getElementById("vitrina-alquiler");
//
const totalVenta = document.getElementById("venta-total");
const totalAlq = document.getElementById("alquiler-total");
// boton menu y su contenedor
const menuBtn = document.getElementById('boton-menu-desplegable');
const modalBtn = document.getElementById('desplegable-body');

const contendor = document.querySelector('.contenedor-main');



/* En la clase vi que usaban un event listener que corroboraba la existencia de los elementos seleccionados del DOM
en la medida al momento de cargar el documento:

document.addEventListener('DOMContentLoaded', ()=>{
  (selectedElement) ? selectedElement.innerHTML = ()=> ...
})

*/
vitrinaVenta
  ? (vitrinaVenta.innerHTML = displayPropiedadesLoop(propVenta, 4))
  : "is null";
vitrinaAlq
  ? (vitrinaAlq.innerHTML = displayPropiedadesLoop(propAlquiler, 4))
  : "is null";
totalVenta
  ? (totalVenta.innerHTML = displayPropiedadesLoop(propVenta, propVenta.length))
  : "is null";
totalAlq
  ? (totalAlq.innerHTML = displayPropiedadesLoop(
      propAlquiler,
      propAlquiler.length
    ))
  : "is null";
menuBtn && modalBtn ? botonMenuDisplay(menuBtn, modalBtn) : 'is null';
//visuaizar elemento clickeado en pantalla
contendor? heroCard(contendor): 'is null';
