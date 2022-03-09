import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

import NavBar  from '../components/NavBar';

const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const authToken = true

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <div className="overlay">
            <NavBar minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
            <div className='home'>
                <h1>Swipe Right for fun</h1>
                <button className='primary-button' onClick={() => handleClick()}>
                    {authToken ? 'Sign out' : 'Create an Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} />
                )}
            </div>
        </div>
    );
}

export default Home;
