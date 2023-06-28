import './Card.css'

export function CardLeft({ img, title, text, button }) {
    return (
        <article className="cardContainer">
            <div className='infoContainer'>
                <h1 className="cardTitle">{ title }</h1>
                <p className="cardText">{text}</p>
                <div className="cardButton">{ button }</div>
            </div>
            <img className='banner' src={ img } />
        </article>
    )
}