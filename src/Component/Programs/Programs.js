import React from 'react';
import './Programs.css';


const Programs = () => {

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Our Classes</h1>
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
            </div>

            <div className='container'>
                
                <div className='row'>
                    <div className='col-md-5 yoga'>
                        <a href="/class-description/yoga-training">Yoga Training</a>
                    </div>

                    <div className='col-md-5 cardio'>
                        <a href="/class-description/cardio-training">Cardio Training</a>
                    </div>
                    
                </div>

                <div className='row'>
                    <div className='col-md-5 psycho'>
                        <a href="/class-description/psycho-training">Psycho Training</a>
                    </div>

                    <div className='col-md-5 self'>
                        <a href="/class-description/self-defense">Self-Defense</a>
                    </div>
                    
                </div>

                <div className='row'>
                    <div className='col-md-5 advanced'>
                        <a href="/class-description/advanced-gym">Advanced Gym</a>
                    </div>

                    <div className='col-md-5 strength'>
                        <a href="/class-description/strength-training">Strength Training</a>
                    </div>
                    
                </div>
            </div>

            {/* <section>
                <Class_Description program={program}/>
                {console.log(program)}
            </section> */}
        </div>
    );
};

export default Programs;