import { Link } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <span>Edgar Martínez</span>
            </div>
            <div className="nav-menu">
                <ul>
                    <Link className='navOptions' to={"/"}><li>Inicio</li></Link>
                    <li>Algoritmos</li>
                    <li>Opc3</li>
                </ul>
            </div>
        </div>
    )
}