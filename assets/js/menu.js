

const botonMenuDisplay = (listened, canvas) =>{

    let btnState = false;

    listened.addEventListener('click', ()=>{
        btnState = !btnState; 
            canvas.style.opacity =  btnState ? '.9' : '0';
            canvas.style.pointerEvents = btnState ? 'auto' : 'none';
    });

};

export default botonMenuDisplay;