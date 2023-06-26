import './Card.css'
import bannerClave from '../../img/bannerClave.jpg' 

export function CardRight({ title, text, button }) {
    return (
        <article className="cardContainer">
            <img className='banner' src={ bannerClave } />
            <div className='infoContainer'>
                <h1 className="cardTitle">{ title }</h1>
                <p className="cardText">{text}</p>
                <div className="cardButton">{ button }</div>
            </div>
        </article>
    )
}