/* Botón de Menu interactivo:
  Al seleccionar el botón, aparace el menu en un formato tipo "modal".
  Si el botón es activado el menu se desplega, si se hace click una segunda vez o se deja inactivo por más de 10 segundos el menu se cierra.

*/


const botonMenuDisplay = (listened, canvas) => {
  let btnState = false;

  listened.addEventListener("click", () => {
    btnState = !btnState;
    if(btnState){
      canvas.style.opacity =".9"; 
    }else{
      canvas.style.opacity ="0"; 
    }

    // si el menu se deja abierto por más de 10 segundos
    setTimeout(() => {
      canvas.style.opacity = "0";
    }, "10000");
  });
};

export default botonMenuDisplay;
