
import React, { useRef, useState } from 'react';
export default function Projet({ projetInfo ,hoverProjet,setTakeProjet}) {
  // state (état, données)
  const [isHovered, setIsHovered] = useState(false);
 
  const projetCard = useRef(null);
  console.log(window.innerWidth);
//  const screenWidth = Math.random() * (window.screen.width - (window.screen.width*0.20));


  // comportements
  function inverseSign(number) {
    return -number;
  }
  const resetStyles = () => {
    const div = projetCard.current;
    if (div) {
      div.style.transform = 'rotateY(0deg) rotateX(0deg)';
      div.style.boxShadow = '0px 0px 4px 4px #dfe2e759';
      div.querySelector('.rondProjet').style.transform = `translate3d(0px, 0px, 1rem)`; 
      div.querySelector('.squareProjet').style.transform = `translate3d(0px, 0px, 1rem)`; 
    }
  };
  const projet3d = (event)=> {
    const div = projetCard.current;
      if (div && isHovered) {
        const enfant = div.children;

          const rect = div.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          
          var maxDivW = div.clientWidth/2;
          var maxDivH = div.clientHeight/2;
          
          // position of card rotate X and Y
          var maxDegX = 16;
          var maxDegY = 16; 
          
          var positionY = inverseSign( x * maxDegY/maxDivW);
          var positionX = y * maxDegX/maxDivH;
          div.style.transform = `rotateY(${positionY}deg) rotateX(${positionX}deg) `;
          
          //position of shadow card 
          
          var maxRight = 10;
          var maxDown = 10; 
          
        var positionRight =  x * maxRight/maxDivW;
        var positionDown =  y * maxDown/maxDivH;
        
        div.style.boxShadow = `${positionRight}px ${positionDown}px  20px 0px #dfe2e7`
        
        var positionRoundX = x * 50/maxDivW;
        var positionRoundY = y * 50/maxDivH;
         div.querySelector('.rondProjet').style.transform = `translate3d(${positionRoundX}px, ${positionRoundY}px, 1rem)`; 
         div.querySelector('.squareProjet').style.transform = `translate3d(${x * 25/maxDivW}px, ${ y * 30/maxDivH}px, 1rem)`; 
      }
      
    }
    function takeprojet(projetInfo) {
      
      setTakeProjet(projetInfo);
    
    }
 

   return (
      <a href='#projetInfo' ref={projetCard} 
      style={{background: `radial-gradient(circle, #dfe2e7 0%, #${projetInfo.couleur} 40%)`}}
       className={`conternaireProjet ${
        window.innerWidth > 749 ? (projetInfo.description ? projetInfo.description : '') : 'gros'
      }`} 
      onMouseMove={projet3d} 
      onClick={() => takeprojet(projetInfo)}
     
      onMouseOver={() => {
        setIsHovered(true);
        hoverProjet(projetInfo.nom);
      }}
      
      onMouseLeave={() => {
        setIsHovered(false);
        resetStyles();
      }}>
        <div className='squareProjet'></div>
        {/* <div className='rondProjet'id='roundProjet' style={{backgroundImage :` url('${projetInfo.illustration}')`}} ></div> */}
        <div className='rondProjet'id='roundProjet' style={{background :` #${projetInfo.couleur}`}} ></div>
      </a>

    );
  
}
