import Terminal, { TerminalOutput } from "react-terminal-ui";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState } from "react";
import '../css/Algorithm.css'

export function TransposColumn(){

    const [terminalLineData, setTerminalLineData] = useState();

    const consumeColumn = async (terminalInput) => {
        let text = "", algoritmo = "", rowsNumber = 0, textBoolean, algoritmoBoolean, rowsNumberBoolean;
        let myArray = terminalInput.split(" ");
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].startsWith("-")) {
                textBoolean = false;
                algoritmoBoolean = false;
                rowsNumberBoolean = false;
                switch (myArray[i]) {
                    case "-t":
                        textBoolean = true;
                        break;
                    case "-a":
                        algoritmoBoolean = true;
                        break;
                    case "-rn":
                        rowsNumberBoolean = true;
                        break;
                    default:
                        console.log("Error en default")
                        const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Introduce una bandera existente")}</TerminalOutput>
                        return terminalOutputRes;
                }
            }
            else if (textBoolean === true) {
                text = text + " " + myArray[i];
            }
            else if (algoritmoBoolean === true) {
                if (myArray[i] === "Columna" || myArray[i] === "Clave") {
                    if (myArray[i + 1].startsWith("-")) {
                        algoritmo = myArray[i]
                    }
                    else {
                        console.log("Error en algoritmo parametros")
                        const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Introdujiste parametros de más")}</TerminalOutput>
                        return terminalOutputRes;
                    }
                }
                else {
                    console.log("Error en algoritmo inexistente")

                    const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Ese algoritmo no existe")}</TerminalOutput>
                    return terminalOutputRes;
                    
                }
            }
            else if (rowsNumberBoolean === true) {
                if (parseInt(myArray[i]) === 3 || parseInt(myArray[i]) === 4 || parseInt(myArray[i]) === 5) {
                    rowsNumber = parseInt(myArray[i]);
                }
                else {
                    console.log("Error en filas")

                    const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Solo se permite de 3 a 5 filas")}</TerminalOutput>
                    return terminalOutputRes;
                }
            }
            else {
                console.log("Error incompleto")

                const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Error. Asegurate de escribir la instruccion como se indica")}</TerminalOutput>
                return terminalOutputRes;
                
            }
        }
        if (algoritmo !== "" && rowsNumber !== 0) {
            try {
                const response = await fetch('http://localhost:8080/columncrypt/' + text + '/' + algoritmo + '/' + rowsNumber);
                let data = await response.text();
                const terminalOutputRes = <TerminalOutput>{setTerminalLineData(data)}</TerminalOutput>
                return terminalOutputRes;
            }
            catch (err) {
                console.log(err);
                const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Ocurrio un error, vuelve a intentarlo")}</TerminalOutput>
                return terminalOutputRes;
            }       
        }
        else {
            const terminalOutputRes = <TerminalOutput>{setTerminalLineData("Error. Asegurate de escribir la instruccion como se indica")}</TerminalOutput>
            console.log("Error en fetch no se introdujo la instruccion completa");
            return terminalOutputRes;
        }
    }

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <div>
                <div className="containerTerminal">
                    <Terminal height="332px" name='Algoritmo de transposicion por columna' onInput={ terminalInput => consumeColumn(terminalInput) }>
                        <TerminalOutput key={"WelcomeText"}>Introduce el texto que deseas encriptar</TerminalOutput>
                        { terminalLineData }
                    </Terminal>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default TransposColumn;
