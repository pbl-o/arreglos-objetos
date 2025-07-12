const botonMenuDisplay = (listened, canvas) => {
  let btnState = false;

  listened.addEventListener("click", () => {
    btnState = !btnState;
    canvas.style.opacity = btnState ? ".9" : "0";
    canvas.style.pointerEvents = btnState ? "auto" : "none";

    // si el menu se deja abierto por más de 10 segundos
    setTimeout(() => {
      canvas.style.opacity = "0";
    }, "10000");
  });
};

export default botonMenuDisplay;
