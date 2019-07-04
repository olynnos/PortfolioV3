import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm mynav">
                <h5 className="my-0 mr-md-auto font-weight-normal">Sonny</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#aboutme">About</a>
                    <a className="p-2 text-dark" href="#myprojects">Projects</a>
                    <a className="p-2 text-dark" href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    )
}
