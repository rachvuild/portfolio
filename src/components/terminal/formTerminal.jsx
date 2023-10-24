import React, { useEffect } from "react";
import { useState } from "react";

export default function FormTerminal({
  setline,
  lines,
  scrollToBottom,
  setTerminal
}) {
  // state (état, données)
  const [newLines, setNewLines] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      const char = getCharFromKeyCode(event.keyCode, event.shiftKey);

      if (char !== null) {
        setNewLines((prevLines) => prevLines + char);
      }
      if (event.keyCode === 27) {
      }

      if (event.keyCode === 13) {
        // Touche Entrée (Enter)
        if (newLines !== "") {
          const copiLines = [...lines];

          copiLines.push("C:\\Users\\Root>" + newLines);

          switch (newLines) {
            case "help":
              copiLines.push(
                "<span class='spancommande'>AxelDochez</span>          Learn more about me <br/> <span class='spancommande'>travaux </span>          Show my works <br/><span class='spancommande'> contact   </span>       Displays social networks <br/><span class='spancommande'>leave </span>        Get my email <br/><span class='spancommande'>credits </span>        Show the credits <br/><span class='spancommande'>download </span>       Download TerminalPortfolio"
              );
              setline(copiLines);
              break;
            case "leave":
              setTerminal(false);
              break;
            case "AxelDochez":
              // Code à exécuter lorsque newLines est égal à "AxelDochez"
              break;
            case "travaux":
              // Code à exécuter lorsque newLines est égal à "travaux"
              break;
            case "contact":
              // Code à exécuter lorsque newLines est égal à "contact"
              break;
            default:
              copiLines.push(
                "<span class='spancommande'>'" + newLines + "' n’est pas reconnu en tant que commande interne <br/> ou externe, un programme exécutable ou un fichier de commandes. 'help' </span>"
              );
              setline(copiLines);
          }
        } else {
          const copiLines = [...lines];
          copiLines.push("C:\\Users\\Root>");
          setline(copiLines);
        }
        scrollToBottom();
        
        setNewLines("");
      }

      if (event.keyCode === 8) {
        // Touche Retour (Backspace)
        setNewLines((prevLines) => prevLines.slice(0, -1));
       
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const getCharFromKeyCode = (keyCode, shiftKey) => {
    const keyboardMap = {
      32: " ", // Espace
      48: shiftKey ? "0" : "à",
      49: shiftKey ? "1" : "&",
      50: shiftKey ? "2" : "é",
      51: shiftKey ? "3" : '"',
      52: shiftKey ? "4" : "'",
      53: shiftKey ? "5" : "(",
      54: shiftKey ? "6" : "-",
      55: shiftKey ? "7" : "è",
      56: shiftKey ? "8" : "_",
      57: shiftKey ? "9" : "ç",
      186: shiftKey ? "£" : "$",
      187: shiftKey ? "+" : "=",
      188: shiftKey ? "?" : ",",
      189: shiftKey ? "°" : "^",
      190: shiftKey ? "." : ";",
      191: shiftKey ? "/" : ":",
      192: shiftKey ? "%" : "ù",
      219: shiftKey ? "°" : ")",
      220: shiftKey ? "µ" : "*",
      221: shiftKey ? "¨" : "^",
      223: shiftKey ? "§" : "!",
      226: shiftKey ? ">" : "<",

      222: shiftKey ? "²" : "²",
      // Caractères normaux
      65: shiftKey ? "A" : "a",
      66: shiftKey ? "B" : "b",
      67: shiftKey ? "C" : "c",
      68: shiftKey ? "D" : "d",
      69: shiftKey ? "E" : "e",
      70: shiftKey ? "F" : "f",
      71: shiftKey ? "G" : "g",
      72: shiftKey ? "H" : "h",
      73: shiftKey ? "I" : "i",
      74: shiftKey ? "J" : "j",
      75: shiftKey ? "K" : "k",
      76: shiftKey ? "L" : "l",
      77: shiftKey ? "M" : "m",
      78: shiftKey ? "N" : "n",
      79: shiftKey ? "O" : "o",
      80: shiftKey ? "P" : "p",
      81: shiftKey ? "Q" : "q",
      82: shiftKey ? "R" : "r",
      83: shiftKey ? "S" : "s",
      84: shiftKey ? "T" : "t",
      85: shiftKey ? "U" : "u",
      86: shiftKey ? "V" : "v",
      87: shiftKey ? "W" : "w",
      88: shiftKey ? "X" : "x",
      89: shiftKey ? "Y" : "y",
      90: shiftKey ? "Z" : "z"
    };

    return keyboardMap[keyCode] || null;
  };
  return (
    <span>
      {newLines}
      <span className="barrform">|</span>
    </span>
  );
}
