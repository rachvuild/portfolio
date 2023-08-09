import React, { useRef } from 'react';
import Projet from "../components/projet";
export default function Project({ rowProjet ,hoverProjet}) {
  // state (état, données)

//  const screenWidth = Math.random() * (window.screen.width - (window.screen.width*0.20));


  // comportements



 if(rowProjet !== false){
   return (
     <div className="columProjet">
    {
    rowProjet.map((projetInfo) => (
        
         <Projet
         projetInfo={projetInfo}
         hoverProjet={hoverProjet}
         key={projetInfo.id}
        
         />
      // console.log(projetInfo);
     
       
       ))}
      </div>
    
    );
  }
}