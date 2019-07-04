import React from 'react'

export default function SingleProject({ name, url, img }) {
    return (
        <div className="col-sm-6">
            <div className="card">
                <a href={url}>
                    <img src={img} alt={name} className='card-img-top' />
                </a>
                <div className="card-body">
                    <div className="card-title">{name}</div>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to site</a>
                </div>
            </div>
        </div>
    )
}
