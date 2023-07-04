import Terminal, { TerminalOutput } from "react-terminal-ui";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState } from "react";
import '../css/Algorithm.css'

export function TransposColumn(){

    const [terminalLineData, setTerminalLineData] = useState();

    const consumeColumn = async (terminalInput) => {
        try {
            const response = await fetch('http://localhost:8080/columncrypt/' + terminalInput);
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
