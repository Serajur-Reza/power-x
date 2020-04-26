import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <h3 className="navbar-brand">Power X</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="#">Services</a>                   
                    <a className="nav-item nav-link" href="/class">Our classes</a>
                    <a className="nav-item nav-link" href="/pricing">Pricing</a>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;