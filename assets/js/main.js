const prop_venta = [
  {
    nombre: "Departamento en Providencia",
    src: "https://images.unsplash.com/photo-1651493803417-597a0d2ef37d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Moderno departamento cercano al metro Los Leones.",
    ubicacion: "Providencia, Santiago",
    habitaciones: 2,
    banos: 3,
    costo: 165000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa amplia en La Florida",
    src: "https://images.unsplash.com/photo-1684857432115-00c844cced27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsaWRpbmdzfGVufDB8fDB8fHww",
    descripcion: "Casa con quincho, patio y buena conectividad.",
    ubicacion: "La Florida, Santiago",
    habitaciones: 4,
    banos: 3,
    costo: 210000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento en Ñuñoa",
    src: "https://images.unsplash.com/photo-1651493802729-e97282fc3737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1bGlkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Vista despejada y espacios bien distribuidos.",
    ubicacion: "Ñuñoa, Santiago",
    habitaciones: 2,
    banos: 3,
    costo: 138000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en Santiago Centro",
    src: "https://images.unsplash.com/photo-1686000583193-b07ffc584262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1bGlkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Ideal para inversión, cercano a universidades.",
    ubicacion: "Santiago Centro",
    habitaciones: 1,
    banos: 3,
    costo: 92000000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Departamento en Las Condes",
    src: "https://plus.unsplash.com/premium_photo-1678386645963-3f5b0bdb8dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Departamento con seguridad 24/7 y áreas comunes.",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 3,
    banos: 3,
    costo: 265000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento con vista al mar",
    src: "https://images.unsplash.com/photo-1556784344-ad913c73cfc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Ubicado en sector turístico de Viña.",
    ubicacion: "Viña del Mar",
    habitaciones: 3,
    banos: 3,
    costo: 185000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en Valdivia",
    src: "https://images.unsplash.com/photo-1504919562-9f07375d8d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Casa familiar rodeada de naturaleza.",
    ubicacion: "Valdivia",
    habitaciones: 4,
    banos: 3,
    costo: 158000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en Puerto Montt",
    src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Casa en condominio privado y seguro.",
    ubicacion: "Puerto Montt",
    habitaciones: 3,
    banos: 3,
    costo: 120000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en Antofagasta",
    src: "https://plus.unsplash.com/premium_photo-1671196048754-03a77d051dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Ubicación central, ideal para profesionales.",
    ubicacion: "Antofagasta",
    habitaciones: 2,
    banos: 3,
    costo: 142000000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en Temuco con gran terreno",
    src: "https://images.unsplash.com/photo-1643828302859-026168101b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Amplio jardín y espacio para ampliación.",
    ubicacion: "Temuco",
    habitaciones: 3,
    banos: 3,
    costo: 107000000,
    smoke: true,
    pets: true,
  },
];

const prop_alquiler = [
  {
    nombre: "Depto amoblado en Providencia",
    src: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Ideal para profesionales, a pasos del metro.",
    ubicacion: "Providencia, Santiago",
    habitaciones: 2,
    banos: 3,
    costo: 750000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en Maipú",
    src: "https://images.unsplash.com/photo-1643828302859-026168101b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmxhdHN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Sector tranquilo con patio y estacionamiento.",
    ubicacion: "Maipú, Santiago",
    habitaciones: 3,
    banos: 3,
    costo: 600000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Depto nuevo en Ñuñoa",
    src: "https://images.unsplash.com/photo-1521208059781-bcf3fd4d1245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Edificio con piscina, quincho y gimnasio.",
    ubicacion: "Ñuñoa, Santiago",
    habitaciones: 2,
    banos: 3,
    costo: 680000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Depto en Santiago Centro",
    src: "https://images.unsplash.com/photo-1534113356284-9aa4ea943778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Práctico y céntrico, ideal para estudiantes.",
    ubicacion: "Santiago Centro",
    habitaciones: 1,
    banos: 3,
    costo: 440000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Depto en Las Condes",
    src: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Departamento amplio y bien iluminado.",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 3,
    banos: 3,
    costo: 950000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Depto en Viña del Mar",
    src: "https://images.unsplash.com/photo-1579963824000-7d7b70b2f7a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Frente al mar, ideal para pareja o familia.",
    ubicacion: "Viña del Mar",
    habitaciones: 2,
    banos: 3,
    costo: 800000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en Puerto Varas",
    src: "https://images.unsplash.com/photo-1521201891612-22c55c811a34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Con vista al lago y amplio jardín.",
    ubicacion: "Puerto Varas",
    habitaciones: 3,
    banos: 3,
    costo: 750000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Depto en La Serena",
    src: "https://images.unsplash.com/photo-1498450067505-1e6cec4224fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Cerca de la playa y supermercados.",
    ubicacion: "La Serena",
    habitaciones: 2,
    banos: 3,
    costo: 620000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa de campo en Chillán",
    src: "https://images.unsplash.com/photo-1626374295803-a333cfeca51b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Casa en entorno rural, ideal para descanso.",
    ubicacion: "Chillán",
    habitaciones: 4,
    banos: 3,
    costo: 680000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Depto nuevo en Valdivia",
    src: "https://images.unsplash.com/photo-1478774982626-3fa098a394e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsYXRzfGVufDB8fDB8fHww",
    descripcion: "Edificio moderno y buen aislamiento térmico.",
    ubicacion: "Valdivia",
    habitaciones: 2,
    banos: 3,
    costo: 590000,
    smoke: false,
    pets: true,
  },
];


const displayPropiedades = (obj) => {
  let html = "";
  for (const prop of obj) {
    html+= `<div class="card">

    <div class="card-image">
    <img src=${prop.src} alt= ${prop.nombre}: ${prop.descripcion}>
    </div>

    <div class="card-body">
    
    <h3>${prop.nombre}</h3>
    <p>${prop.descripcion}</p>
    <p>${prop.ubicacion}</p>

    <p>${roomIcon} ${prop.habitaciones} habitaciones | ${bathIcon} ${
      prop.banos
    } baños</p>

    <p>${prop.costo} <span class="divisa">(CLP)</span> </p>

    <p><span ${prop.smoke ? "class=allowed" : "class=not-allowed"} >${
      prop.smoke
        ? `${smoke} Permitido fumar`
        : `${forbbidenSmoke} No se permite Fumar`
    }</span></p>
    <p><span ${prop.pets ? "class=allowed" : "class=not-allowed"} >${
      prop.pets
        ? `${pets} Mascotas permitidas `
        : `${forbidden} No se permiten mascotas`
    }</span></p>

    </div>




</div>`
  };

  return html;
};

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

    <p>${roomIcon} ${
      obj[i].habitaciones
    } habitaciones | ${bathIcon} ${obj[i].banos} baños</p>

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




</div>`;
  }

return  theHtml
};

//icons:
const forbbidenSmoke = `<i class="fa-solid fa-ban-smoking"></i>`;
const forbidden = `<i class="fa-solid fa-ban"></i>`;
const smoke = `<i class="fa-solid fa-smoking"></i>`;
const pets = `<i class="fa-solid fa-paw"></i>`;
const roomIcon = `<i class="fa-solid fa-bed"></i>`;
const bathIcon = `<i class="fa-solid fa-bath"></i>`;



const vitrina = document.getElementById('vitrina');
const displayTotalViviendasVenta = document.getElementById("venta-total");
const displayTotalViviendasAlq = document.getElementById("alquiler-total");




//corroborar y seleccionar elementos (o composiciones de estos)
if(vitrina){
vitrina.innerHTML+= displayPropiedadesLoop(prop_venta, 3) + displayPropiedadesLoop(prop_alquiler,  3);
}

else if(displayTotalViviendasVenta){
displayTotalViviendasVenta.innerHTML = displayPropiedades(prop_venta);
}


else if(displayTotalViviendasAlq){
displayTotalViviendasAlq.innerHTML = displayPropiedades(prop_alquiler);
}







// This checks if the selected element exists.

// if(displayAllViviendasVenta){
//  displayPropiedadesLoop(prop_venta, displayAllViviendasVenta, 3);
// }

// if(displayAllViviendasAlq){
// displayPropiedadesLoop(prop_alquiler, displayAllViviendasAlq, 3);
 
// }
 


//Revisar y entender esto.



//subtitle areas:




