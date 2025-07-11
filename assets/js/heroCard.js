const heroCard = ( ) =>{
    
    const heroDiv = document.querySelector('.hero');
    let changeState = false;


document.addEventListener('click', (e)=>{
  changeState = !changeState;

  
  if(changeState){
    
      
      heroDiv.style.position ='fixed';
      if(e.target.src ===  undefined){
        heroDiv.style.left = '-100%'; 

      }else{
        heroDiv.style.left = '0';
        heroDiv.style.opacity ='1';
        heroDiv.innerHTML = `<div class="cover">
        ${`<img class="cover-img" src="${e.target.src}">`}
      <p class="cover-text">${e.target.alt}</p>
      </div>`;
      }

  }else{
     heroDiv.style.left = '-100%';
  }

});

}

export default heroCard;