
import Projet from "./projet";
export default function Project({ rowProjet ,hoverProjet,setTakeProjet}) {
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
         setTakeProjet={setTakeProjet}
         key={projetInfo.id}
        
         />
       ))}
      </div>
    
    );
  }
}