/*Renderizado de elemento card:

Se crea una función cuyos argumentos representan la clase a procesar y la cantidad de instancias a generar.
Todas las instancias se almacenan en la función theHtml, a la cual se le agrega una instancia de render de card
posicionando formatando los datos solicitados a alquiler.js o venta.js;
Al final del proceso theHtml tendra un template de tarjeta renderizado la cantidad de instancias asignadas al bucle.  

En el caso del index 3 cards para la categoría venta y 3 cards para la categoría alquiler.
*/


//icons:
const forbbidenSmoke = `<i class="fa-solid fa-ban-smoking"></i>`;
const forbidden = `<i class="fa-solid fa-ban"></i>`;
const smoke = `<i class="fa-solid fa-smoking"></i>`;
const pets = `<i class="fa-solid fa-paw"></i>`;
const roomIcon = `<i class="fa-solid fa-bed"></i>`;
const bathIcon = `<i class="fa-solid fa-bath"></i>`;

const displayPropiedadesLoop = (obj, amount) => {
  let theHtml = "";
  for (let i = 0; i < amount; i++) {
    theHtml += `<div class="card">

    <div class="card-image">
    <img src=${obj[i].src} alt= '${obj[i].nombre}: ${obj[i].descripcion}'>
    </div>

    <div class="card-body">
    
    <h3 class ="card-title">${obj[i].nombre}</h3>
    <p>${obj[i].descripcion}</p>
    <p>${obj[i].ubicacion}</p>

    <p>${roomIcon} ${obj[i].habitaciones} habitaciones | ${bathIcon} ${
      obj[i].banos
    } baños</p>

    <p>${obj[i].costo}<span class= "divisa"> (CLP) </span></p>

<p><span ${obj[i].smoke ? "class=allowed" : "class=not-allowed"} >${
      obj[i].smoke
        ? `${smoke} Permitido fumar`
        : `${forbbidenSmoke} No se permite Fumar`
    }</span></p>
    <p><span ${obj[i].pets ? "class=allowed" : "class=not-allowed"} >${
      obj[i].pets
        ? `${pets} Mascotas permitidas `
        : `${forbidden} No se permiten mascotas`
    }</span></p>

    </div>




</div>
`;
  }

  return theHtml;
};

export default displayPropiedadesLoop;
