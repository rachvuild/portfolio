import { useState } from "react";
import LineTerminal from "./lineTerminal";

import FormTerminal from "./formTerminal";
export default function Terminal({ terminal, setTerminal }) {
  //usestate
  const [lines, setLines] = useState([]);

  function setline(e) {
    setLines(e);
  }
  function scrollToBottom() {
    var ter = document.getElementById("terminal");
    setTimeout(() => {
      ter.scrollTop = ter.scrollHeight;
      console.log(ter.scrollHeight);
    }, 0);
  }

  //return
  if (terminal === true) {
    return (
      <div onClick={onclick} tabIndex={0} className="windowterminal">
        <div className="terminal" id="terminal">
          <ol className="linesterminal">
            {lines.map((line) => (
              <LineTerminal line={line} />
            ))}
          </ol>
          <div className="enter">
            <p className="penter">C:\Users\Root&rsaquo;</p>
            <FormTerminal
              setline={setline}
              lines={lines}
              scrollToBottom={scrollToBottom}
              setTerminal={setTerminal}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
