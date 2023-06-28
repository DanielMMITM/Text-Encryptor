import Terminal, { TerminalOutput } from "react-terminal-ui";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState } from "react";
import '../css/Algorithm.css'

export function TransposColumn(){

    const [terminalLineData, setTerminalLineData] = useState();

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <body>
                <div className="containerTerminal">
                    <Terminal height="332px" name='Algoritmo de transposicion por columna' onInput={terminalInput => <TerminalOutput>{ setTerminalLineData(terminalInput) }</TerminalOutput> }>
                        <TerminalOutput key={"WelcomeText"}>Introduce el texto que deseas encriptar</TerminalOutput>
                        { terminalLineData }
                    </Terminal>
                </div>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default TransposColumn;
