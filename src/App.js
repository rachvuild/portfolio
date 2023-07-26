
import './App.css';
import { useState ,useRef } from "react";


import Projet from "./components/projet";
import ADroit from "./components/adroit";
import Social from "./components/social";
import Terminal from "./components/terminal";
export default function App() {
  // state (état, données)
  const [imgProjet, setImgProjet] = useState([]);
  const [adroits, setAdroits] = useState([false]);
  const [projets, setprojets] = useState([false]);
  const [terminal, setTerminal] = useState();
  const [social, setSocial] = useState([false]);
  const [projetH, setprojetH] = useState("");
  const [moveProjet, setmoveProjet] = useState(0);
  const animationRef = useRef();
 
  // comportements
  function afficheMoi(id) {
    setprojets([null]);
    if (id === 1) {
      setImgProjet([])
      setSocial([false])
      const copieprojet = [false];
      setprojets(copieprojet);
      console.log(adroits);

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
        const copieprojet = [];
        copieprojet.push(
          {
            id: 1,
            nom: "GSB",
            description: "gros",
            image: "",
            url: "img/gsb.png"
          },
          {
            id: 2,
            nom: "Stage",
            description: "gros",
            image: "",
            url: "img/stage.jpg"
          },
          {
            id: 3,
            nom: "EFS",
            description: "gros",
            image: "",
            url: "img/esf.png"
          },
          {
            id: 4,
            nom: "Chat",
            description: "gros",
            image: "",
            url: "img/chat.png"
          }
          ,
          {
            id: 5,
            nom: "ContraBureau",
            description: "petit",
            image: "",
            url: "img/chat.png"
          }
          ,
          {
            id: 6,
            nom: "buton",
            description: "petit",
            image: "",
            url: "img/chat.png"
          }
        );
        setprojets(copieprojet);
      } else {
        setprojets([false]);
      }
    }
    if (id === 3) {
      setImgProjet([]);
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
  
  // affichage (render)
  return (
    <div className='bodyall'>
       <div className='home' >
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
          {<ADroit adroit={adroits} />}
        </div>
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
          <Social 
           key={social.id}
           socialInfo={social}
          />
        </div>
      </nav>
      </div>
      <div id='projet' className='projet' onMouseMove={(e) => movemouse(e)  } >
   <div className='hoverProjet '>
   <h4 style={{ transform: `translateY(${moveProjet}px)` }}>Projet:{projetH}</h4>  
   </div>
   <div className='projets'>

      {projets.map((projet) => (
        <Projet
        projetInfo={projet}
        key={projet.id}
        hoverProjet={hoverProjet}
        />
        ))}
        </div>
       <div className='back'>	<h4>&larr</h4></div>
      </div>
    </div>
  );
}
