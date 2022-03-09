import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

import NavBar  from '../components/NavBar';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const authToken = false

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <NavBar minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
            <div className='home'>
                <h1 className='primary-title'>Swipe Right for fun</h1>
                <button className='primary-button' onClick={() => handleClick()}>
                    {authToken ? 'Sign out' : 'Create an Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    );
}

export default Home;
