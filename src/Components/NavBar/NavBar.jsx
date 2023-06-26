import './NavBar.css'

export function NavBar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <span>Edgar Martínez</span>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>Inicio</li>
                    <li>Opc2</li>
                    <li>Opc3</li>
                </ul>
            </div>
        </div>
    )
}