import React from 'react';

import NavBar  from '../components/NavBar';

const Home = () => {

    const authToken = true

    const handleClick = () => {

    }

    return (
        <div className="overlay">
            <NavBar minimal={false} authToken={authToken}/>
            <div className='home'>
                <h1>Swipe Right for fun</h1>
                <button className='primary-button' onClick={() => handleClick()}>
                    {authToken ? 'Sign out' : 'Create an Account'}
                </button>
            </div>
        </div>
    );
}

export default Home;
