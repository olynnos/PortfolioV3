import React, { useState } from 'react'

export default function SingleProject({ name, url, img, description }) {


    const [active, setActive] = useState(false);

    const testing = () => {
        setActive(!active);
    }

    return (
        <div className="col-sm-6 scene">
            <div className={active ? "card is-flipped" : "card"} onClick={testing}>
                <div className="card__face card__face--front">
                    <img src={img} alt={name} className='card-img-top' />
                    {/* <a href={url}>
                        <img src={img} alt={name} className='card-img-top' />
                    </a> */}
                </div>
                <div className="card__face card__face--back">

                    <div className="card-title">{name}</div>
                    <p>{description}</p>
                    <a href={url} className="btn btn-primary goTo-btn" target="_blank" rel="noopener noreferrer">Go to site</a>
                </div>
            </div>
        </div>
    )
}
