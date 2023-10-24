
import './App.css';
import { useState ,useRef } from "react";


import Project from "./components/projet/projets";
import AllProjectsJson from "./components/json/projets.json";
import ProjetInfo from "./components/projet/projetInfo";
import ADroit from "./components/adroit";
import Social from "./components/social";
import Terminal from "./components/terminal/terminal";
export default function App() {
  // state (état, données)
  
  const [adroits, setAdroits] = useState([false]);
  const [terminal, setTerminal] = useState();
  const [projets, setprojets] = useState([false]);
  const [social, setSocial] = useState([false]);
  const [projetH, setprojetH] = useState("");
  const [moveProjet, setmoveProjet] = useState(0);
  const animationRef = useRef();
  const [takeProjet, setTakeProjet] = useState([false]);
  const projetsSansNiveauSuperieur = AllProjectsJson.projects;
  
  // comportements
  function afficheMoi(id) {
    setprojets([null]);
    if (id === 1) {
      
      setSocial([false])
      const copieprojet = [false];
      setprojets(copieprojet);
     

      if (adroits[0] === false) {
       
        setAdroits(
          <div className="adroit propre">
            <div className="apropos">
              <h3>A propos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque dapibus lorem id lectus facilisis, tincidunt
                laoreet mi rhoncus. Ut et risus blandit, euismod nulla quis,
                pretium sapien. Vivamus sit amet semper enim. Vivamus viverra
                odio condimentum imperdiet pulvinar. Maecenas eget elit mauris.
                Nullam ut mauris nisi. Vivamus feugiat ultrices mattis.
              </p>
            </div>
          </div>
        );
      } else {
        setAdroits([false]);
      }
    }
    
    if (id === 2) {
      setSocial([false])
      setAdroits([false]);
      if (projets[0] === false) {
      
        const backProjet = document.getElementById('backProjet');
        const copieprojet = [];
        
       
          projetsSansNiveauSuperieur.map((rowProjet)=>(
            copieprojet.push(rowProjet )
            
          ));
         
          
       
        const taillePartie = Math.ceil(copieprojet.length / 3);
const tableauprojet = [
  copieprojet.slice(0, taillePartie),
  copieprojet.slice(taillePartie, taillePartie * 2),
  copieprojet.slice(taillePartie * 2)
];

        setprojets(tableauprojet);
        backProjet.style.display = 'grid';
      } else {
        
        setprojets([false]);
      }
    }
    if (id === 3) {
      
      const copieprojet = [false];
      setprojets(copieprojet);
      setAdroits([false]);
      if (social[0] === false) {
        const socialCopie =  [];
      socialCopie.push(
        {
          id: 1,
          nom: "linkedin",
         site:"https://www.linkedin.com/in/axel-dochez-246b11194/",
          url: "img/linkedin.avif"
        },
       
        {
          id: 3,
          nom: "github",
          url:"img/github.png",
          site: "https://github.com/rachvuild"
        },
        {
          id: 4,
          nom: "codepen",
          site:"https://codepen.io/axel-dochez",
          url: "img/codepen.png"

        },
        {
          id: 5,
          nom: "codesandbox",
          site:"https://codesandbox.io/u/rachvuildmz5",
          url: "img/codesandbox.png"
          
        }
        
        
      )
    
      setSocial(socialCopie)
      }else{
        setSocial([false])
      }
    }
    if (id === 4) {
      const copieprojet = [false];
      setprojets(copieprojet);
      setAdroits([false]);

      setTerminal(true);
    }
  }
  function hoverProjet(nom) {
    setprojetH(nom)
  }
 
  function movemouse(e) {
    const y = e.clientY;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(() => setmoveProjet(y-window.screen.width*0.02));
  
  }
  function backHome(e) {
    
    const backProjet = document.getElementById('backProjet');
    backProjet.style.display = 'none';
    setprojets([false]);
  
  }
  

  // affichage (render)
  return (
    <div className='bodyall' >
       <div className='home' id='home'>
      <div className="name">
        <h1 onClick={() => afficheMoi(4)}>Axel Dochez-Lesur</h1>
        <p>Developper Web junior</p>
      </div>
      
      {<Terminal terminal={terminal} setTerminal={setTerminal} />}
      <nav className="list">
        <div onClick={() => afficheMoi(1)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Moi</h2>
            <hr />
          </div>
        </div>
          {<ADroit adroit={adroits} />}
        <a href='#projet' onClick={() => afficheMoi(2)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Mon travail</h2>
            <hr />
          </div>
        
        </a>
        <div onClick={() => afficheMoi(3)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Social</h2>
            <hr />
          </div>
        </div>
          <Social 
           key={social.id}
           socialInfo={social}
           setSocial={setSocial}
          />
      </nav>
      </div>

      {/* projet */}
      <div className='allProjetContenaire'>
      <div id='projet' className='projet' onMouseMove={(e) => movemouse(e)  } >
   <div className='hoverProjet '>
   <h4 style={{ transform: `translateY(${moveProjet}px)` }}>Projet:{projetH}</h4>  
   </div>
   <div className='projets' >

      {projets.map((rowProjet,index) => (
        <Project
        rowProjet={rowProjet}
        hoverProjet={hoverProjet}
        setTakeProjet={setTakeProjet}
        key={index}
        />
        ))}
        </div>
       <a href='#home' id='backProjet' className='backProjet'  onClick={(e) => backHome(e)}>	<h4>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.0"
          viewBox="0 0 512.000000 512.000000"
           preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" 
              fill="#dfe2e7" 
              stroke="none">
              <path d="M2490 5103 c-26 -13 -254 -299 -913 -1143 -483 -619 -885 -1141 -894 -1160 -19 -44 -13 -122 14 -158 11 -15 35 -36 54 -47 33 -19 55 -20 627 -23 l592 -3 0 -1228 0 -1228 23 -33 c12 -18 35 -43 50 -54 28 -21 37 -21 517 -21 478 0 489 0 516 21 15 11 37 33 48 48 21 27 21 33 24 1267 l2 1239 591 0 c668 0 639 -3 686 77 34 58 29 125 -12 180 -204 271 -1753 2248 -1771 2260 -38 24 -112 28 -154 6z m775 -1308 l693 -890 -507 -5 c-358 -4 -512 -8 -526 -17 -31 -18 -73 -65 -84 -96 -8 -19 -11 -410 -11 -1248 l0 -1219 -270 0 -270 0 0 1219 c0 838 -3 1229 -11 1248 -11 31 -53 78 -84 96 -14 9 -168 13 -526 17 l-507 5 695 893 c383 491 700 891 706 889 5 -1 321 -403 702 -892z"/>
            </g>
</svg>
</h4>
        </a>
      </div>
      <div className='commenteProjet' id='projetInfo' >
        {<ProjetInfo
        takeProjet={takeProjet}
        key={takeProjet.id}
        />}
      </div>
      </div>
    </div>
  );
}
