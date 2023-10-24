export default function Social({ socialInfo,setSocial }) {
    function copy(socialInfo) {
            navigator.clipboard.writeText('axel.dochezmz5@gmail.com');
            
            setSocial(socialInfo);
            
    }

    if (socialInfo[0] !== false) {
    return (

        <div className="adroit propre">
    <div className="social">
      <div>
        
      </div>
      <h3>Social</h3>
     <div className='socialContainte'>
     <a className="imgsocial" title="axel.dochezmz5@gmail.com" onClick={() => copy(socialInfo)} >
        <img className="imgsocial" src="img/email.png" alt="" />
        </a> 
{
    
    socialInfo.map((social) => (
        <a className="imgsocial" title={social.nom} href={social.site}>
        <img className="imgsocial" src={social.url} alt="" />
        </a>
        
    ))
}
     </div>
    </div>
  </div>
        );
  }
}