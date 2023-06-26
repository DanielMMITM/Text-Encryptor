import { Link } from 'react-router-dom'
import './Button.css'

export function Button({ text, route}) {
    return (
        <Link to={route}><button className="button">{text}</button></Link>
        
    )
}
