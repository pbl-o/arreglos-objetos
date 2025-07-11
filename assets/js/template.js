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
    <img src=${obj[i].src} alt= ${obj[i].nombre}: ${obj[i].descripcion}>
    </div>

    <div class="card-body">
    
    <h3>${obj[i].nombre}</h3>
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
