
import React, { useRef, useState } from 'react';
export default function Projet({ projetInfo ,hoverProjet}) {
  // state (état, données)
  const [isHovered, setIsHovered] = useState(false);
  const projetCard = useRef(null);
//  const screenWidth = Math.random() * (window.screen.width - (window.screen.width*0.20));


  // comportements
  function inverseSign(number) {
    return -number;
  }
  const resetStyles = () => {
    const div = projetCard.current;
    if (div) {
      div.style.transform = 'rotateY(0deg) rotateX(0deg)';
      div.style.boxShadow = '0px 0px 0px 0px #dfe2e7';
    }
  };
  const projet3d = (event)=> {
    const div = projetCard.current;
    console.log(div.clientX);
  

      if (div && isHovered) {
        const rect = div.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        
        var maxDivW = div.clientWidth/2;
        var maxDivH = div.clientHeight/2;
        
        // position of card rotate X and Y
        var maxDegX = 16;
        var maxDegY = 16; 
        
        var positionY = inverseSign( x * maxDegY/maxDivW);
        var positionX =inverseSign( y * maxDegX/maxDivH);
        div.style.transform = `rotateY(${positionY}deg) rotateX(${positionX}deg) `;
        
        //position of shadow card 
        
        var maxRight = 10;
        var maxDown = 10; 
        var positionRight =  x * maxRight/maxDivW;
        var positionDown = y * maxDown/maxDivH;
        
        div.style.boxShadow = `${positionRight}px ${positionDown}px  20px 0px #dfe2e7`
        
      }
   
    }
    
    

   return (
      <div ref={projetCard} className={`conternaireProjet ${projetInfo.description ? projetInfo.description : ''}`} 
      onMouseMove={projet3d}   
      onMouseOver={() => {
        setIsHovered(true);
        hoverProjet(projetInfo.nom);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        resetStyles();
      }}>
      <img className='liProjet' src={projetInfo.url}/>
      <div className='blur ' ></div>
      </div>

    );
  
}
