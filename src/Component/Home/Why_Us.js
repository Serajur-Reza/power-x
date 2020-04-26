import React from 'react';
import abs from '../../power-x-gym/Image & Icon/Group 87.png'
import cycle from '../../power-x-gym/Image & Icon/Group 88.png'
import gift from '../../power-x-gym/Image & Icon/gift-2.png'
import './Why_Us.css'

const Why_Us = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Why Choose Us</h1>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={abs} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5>Free Fitness Training</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={cycle} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5>Tons of Cardio and Strength</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={gift} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5>No Commitment Memberships</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why_Us;