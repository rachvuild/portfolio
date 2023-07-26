
export default function Project({ projetInfo ,hoverProjet}) {
  // state (état, données)

 const screenWidth = Math.random() * (window.screen.width - (window.screen.width*0.20));

 console.log(screenWidth);
  // comportements
  
  return (
    <div className="conternaireProjet"  onMouseOver={() => hoverProjet(projetInfo.nom)}>
    
    <img className="liProjet" src={projetInfo.url}  />
   <div className="blur" ></div>
      </div>
    
  );
}
