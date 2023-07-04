import './Card.css'

export function CardRight({ img, title, text, button }) {
    return (
        <article className="cardContainer">
            <img className='banner' src={ img } />
            <div className='infoContainer'>
                <h1 className="cardTitle">{ title }</h1>
                <p className="cardText">{text}</p>
                <div className="cardButton">{ button }</div>
            </div>
        </article>
    )
}