import React from 'react';
// import head_img from "../../power-x-gym/Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
import './Home.css'
import About from './About';
import Why_Us from './Why_Us';

const Home = () => {
    return (
        <div>
            <section className="intro">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4'>
                            <h1>The best fitness studio in town</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <button>Join Us</button>
                        
                        </div>
                    </div>
                </div>
                
                
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 progression">
                            <h2>Progression</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 workout">
                            <h2>Workout</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 nutrition">
                            <h2>Nutrition</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <About></About>
            </section>

            <section>
                <Why_Us></Why_Us>
            </section>
        </div>
    );
};

export default Home;