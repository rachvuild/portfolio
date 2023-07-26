export default function Social({ socialInfo }) {
    function copy() {
            navigator.clipboard.writeText('axel.dochezmz5@gmail.com');
    }

    if (socialInfo[0] != false) {
    return (

        <div className="adroit propre">
    <div className="social">
      <div>
        
      </div>
      <h3>Social</h3>
     <div className='socialContainte'>
     <a className="imgsocial" onClick={() => copy()} >
        <img className="imgsocial" src="img/email.png" alt="" />

        </a> 
{
    socialInfo.map((social) => (
        <a className="imgsocial" href={social.site}>
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