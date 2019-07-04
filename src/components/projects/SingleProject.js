import React from 'react'

export default function SingleProject({ name, url }) {
    return (
        <div className="col-sm-6">
            <div className="card">
                <a href={url}>
                    <img src="./assets/projects/gridbox.png" alt="grid_project" className='card-img-top' />
                </a>
                <div className="card-body">
                    <div className="card-title">{name}</div>
                    <p className="card-text">text</p>
                    <a href={url} className="btn btn-primary">Github</a>
                </div>
            </div>
        </div>
    )
}
