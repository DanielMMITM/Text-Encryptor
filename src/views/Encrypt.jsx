import Terminal, { TerminalOutput } from "react-terminal-ui";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState } from "react";
import "../css/Algorithm.css";
import { ScrollRestoration } from "react-router-dom";

export function Encrypt() {
  const [terminalLineData, setTerminalLineData] = useState();

  const consumeColumn = async (terminalInput) => {
    let text = "",
      algorithm = "",
      key = "",
      rowsNumber = 0,
      columnsNumber = 0,
      textBoolean,
      algorithmBoolean,
      rowsNumberBoolean,
      keyBoolean,
      decrypt,
      columnsNumberBoolean;
    let myArray = terminalInput.split(" ");
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].startsWith("-")) {
        algorithmBoolean =
          textBoolean =
          rowsNumberBoolean =
          keyBoolean =
          columnsNumberBoolean =
            false;
        switch (myArray[i]) {
          case "-t":
            textBoolean = true;
            break;
          case "-a":
            algorithmBoolean = true;
            break;
          case "-rn":
            rowsNumberBoolean = true;
            break;
          case "-k":
            keyBoolean = true;
            break;
          case "-d":
            decrypt = true;
            break;
          case "-cn":
            columnsNumberBoolean = true;
            break;
          default:
            const terminalOutputRes = (
              <TerminalOutput>
                {setTerminalLineData("Enter an existent flag")}
              </TerminalOutput>
            );
            return terminalOutputRes;
        }
      } else if (textBoolean) {
        text = text + " " + myArray[i];
      } else if (algorithmBoolean) {
        if (myArray[i] === "Columna" || myArray[i] === "Clave") {
          if (myArray[i + 1].startsWith("-")) {
            algorithm = myArray[i];
          } else {
            const terminalOutputRes = (
              <TerminalOutput>
                {setTerminalLineData("Flags can only contain one parameter")}
              </TerminalOutput>
            );
            return terminalOutputRes;
          }
        } else {
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("Non existent algorithm")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      } else if (rowsNumberBoolean) {
        if (
          parseInt(myArray[i]) === 3 ||
          parseInt(myArray[i]) === 4 ||
          parseInt(myArray[i]) === 5
        ) {
          rowsNumber = parseInt(myArray[i]);
        } else {
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("Allowed rows goes from 3 to 5")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      } else if (columnsNumberBoolean) {
        columnsNumber = parseInt(myArray[i]);
      } else if (keyBoolean) {
        key = key + " " + myArray[i];
      } else {
        const terminalOutputRes = (
          <TerminalOutput>
            {setTerminalLineData(
              "Error. Make sure to write the sentence correctly"
            )}
          </TerminalOutput>
        );
        return terminalOutputRes;
      }
    }
    if (
      algorithm !== "" &&
      (rowsNumber !== 0 || key !== "" || columnsNumber !== 0)
    ) {
      if (algorithm === "Columna" && !decrypt) {
        try {
          const response = await fetch(
            "http://localhost:8080/crypt/" + text + "/" + rowsNumber
          );
          let data = await response.text();
          const terminalOutputRes = (
            <TerminalOutput>{setTerminalLineData(data)}</TerminalOutput>
          );
          return terminalOutputRes;
        } catch (err) {
          console.log(err);
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("An error has occurred. Try again")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      } else if (algorithm === "Columna" && decrypt) {
        try {
          const response = await fetch(
            "http://localhost:8080/decrypt/" + text + "/" + columnsNumber
          );
          let data = await response.text();
          const terminalOutputRes = (
            <TerminalOutput>{setTerminalLineData(data)}</TerminalOutput>
          );
          return terminalOutputRes;
        } catch (err) {
          console.log(err);
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("An error has occurred. Try again")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      } else if (algorithm === "Clave" && !decrypt) {
        try {
          const response = await fetch(
            "http://localhost:8080/crypt?text=" + text + "&key=" + key
          );
          let data = await response.text();
          const terminalOutputRes = (
            <TerminalOutput>{setTerminalLineData(data)}</TerminalOutput>
          );
          return terminalOutputRes;
        } catch (err) {
          console.log(err);
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("An error has occurred. Try again")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      } else if (algorithm === "Clave" && decrypt) {
        try {
          const response = await fetch(
            "http://localhost:8080/decrypt?text=" + text + "&key=" + key
          );
          let data = await response.text();
          const terminalOutputRes = (
            <TerminalOutput>{setTerminalLineData(data)}</TerminalOutput>
          );
          return terminalOutputRes;
        } catch (err) {
          console.log(err);
          const terminalOutputRes = (
            <TerminalOutput>
              {setTerminalLineData("An error has occurred. Try again")}
            </TerminalOutput>
          );
          return terminalOutputRes;
        }
      }
    } else {
      const terminalOutputRes = (
        <TerminalOutput>
          {setTerminalLineData(
            "Error. Make sure to write the sentence correctly"
          )}
        </TerminalOutput>
      );
      return terminalOutputRes;
    }
  };

  return (
    <>
      <ScrollRestoration />
      <header>
        <NavBar></NavBar>
      </header>
      <section>
        <div className="containerTerminal">
          <Terminal
            height="332px"
            name="Encrypt / Decrypt your text"
            onInput={(terminalInput) => consumeColumn(terminalInput)}
          >
            <TerminalOutput key={"WelcomeText"}>
              Write a sentence to encrypt
            </TerminalOutput>
            {terminalLineData}
          </Terminal>
        </div>
        <div className="consoleInstructions">
          <h3>Instructions</h3>
          <p>
            To use properly our console and encrypt the text with the available
            algorithms, read the following instructions:
          </p>
          <ul className="listInstructions">
            <li>Use -t followed by the text to encrypt.</li>
            <li>Use -a followed by the algorithm to use (Clave / Columna).</li>
            <li>
              Use -rn followed by the number of rows to encrypt your text (3 / 4
              / 5).
            </li>
            <li>Use -k followed by the secret key to encrypt your text.</li>
          </ul>
          <h4>Decrypt using key transposed matrix</h4>
          <ul className="listInstructions">
            <li>
              To decrypt a text, write all the previous flags replacing the text
              with the given encrypted text and add -d at the end
            </li>
          </ul>
          <h4>Decrypt using column transposed matrix</h4>
          <ul className="listInstructions">
            <li>
              Replace -rn with -cn followed by the number of columns given.
            </li>
            <li>Replace the text with the given encrypted text.</li>
            <li>
              Write all the previous flags and add -d at the end of the
              sentence.
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Encrypt;
