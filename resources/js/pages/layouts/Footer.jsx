import React from 'react'

const datum = new Date();

const Footer = () => {
    return (
        <div>
            <footer className="footer fixed-bottom" >
                <div className="container-fluid bg-dark navbar-dark">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                © 14SL <span className='ms-5'>{datum.toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-muted" target="_blank">Kapcsolat</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link pe-0 text-muted"
                                        target="_blank">Egyéb</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
