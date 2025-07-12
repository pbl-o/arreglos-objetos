/*Esta función da una muestra en detalle de una imagen seleccionada por el usuario
si el elemento seleccionado tiene src renderiza una tarjeta para ver el elemento con mayor detalle:
imagen + descripción de la imagen (usadno el texto alternativo de la imagen). */

const heroCard = () => {
  const heroDiv = document.querySelector(".hero");
  let changeState = false;

  document.addEventListener("click", (e) => {
    changeState = !changeState;

    if (changeState) {
      heroDiv.style.position = "fixed";

      if (e.target.src === undefined) {
        heroDiv.style.left = "-100%";
        heroDiv.style.opacity = "0";
      } else {
        heroDiv.style.left = "0";
        heroDiv.style.opacity = "1";
        heroDiv.innerHTML = `<div class="cover">
        ${`<img class="cover-img" src="${e.target.src}">`}
      <p class="cover-text">${e.target.alt}</p>
      </div>`;
      }
    } else {
      heroDiv.style.left = "-100%";
      heroDiv.style.opacity = "0";
    }
  });
};

export default heroCard;
