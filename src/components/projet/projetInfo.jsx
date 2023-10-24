export default function ProjetInfo({ takeProjet }) {


    return (
      <div  className="bodyProjet" >
        <img className="illustrationProjet" src={takeProjet.illustration}  />
        <div>
        {takeProjet && takeProjet.nom ? (
              <h3>{takeProjet.nom}</h3>
            ) : (
              <h2>tittle</h2>
            )}
            
            <hr />
            <div className="ContenaireTextProjet">
                <div className="ContenaireCategorieProjet">
                  <table>
                    
                    <tbody className="rowCategorieProjet" >
                {takeProjet && takeProjet.catergorie ? (
                  takeProjet.catergorie.map((catergorie) => (
                    
                      <tr className="ligneCatergorieProjet">
                  <td className="tittleCatergorieProjet">{catergorie.name}</td>
                  <td className="desCatergorieProjet">{catergorie.description}</td>
                      </tr>

                  
                  ))
                  ) : (
                    <p>Les données du projet ne sont pas disponibles pour le moment.</p>
                    )}
                    </tbody>
                </table>
                </div>
                {takeProjet && takeProjet.synthèse ? (
                <p className="descriptionProjet">
                {takeProjet.synthèse}
                </p>
                  ) : (
                    <div className="descriptionProjet">
                    description of project 
                </div>
                    )}
                
            </div>
            <div className="conternaireDetail">
             {takeProjet && takeProjet.detail ? (
              takeProjet.detail.map((detail) => (
                <div key={detail.name}>
                  <h2>{detail.name}</h2>
                  {detail.img.map((image) => (
                    <img key={image.url} className='imagedetail' src={image.url} alt={detail.nom} />
                  ))}
                </div>
              ))
            ) : (
              <p>Les données du projet ne sont pas disponibles pour le moment.</p>
            )}
                    
                
            </div>
        </div>
      </div>
    );
  }
  