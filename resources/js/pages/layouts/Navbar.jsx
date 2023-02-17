import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/"><img src="/img/apple_nav_brand.png" alt="brand"/></a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:8000/dashboard">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>Disabled</a>
                        </li>
                    </ul>        
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 float-e">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Belépés</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Regisztráció</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>                
    )
}

export default Navbar
