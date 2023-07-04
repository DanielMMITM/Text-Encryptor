import Terminal, { TerminalOutput } from "react-terminal-ui";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState } from "react";
import '../css/Algorithm.css'

export function TransposClave() {
    const [terminalLineData, setTerminalLineData] = useState();

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <div>
                <div className="containerTerminal">
                    <Terminal height="332px" name='Algoritmo de transposicion con clave' onInput={terminalInput => <TerminalOutput>{ setTerminalLineData(terminalInput) }</TerminalOutput> }>
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

export default TransposClave;