import React from 'react';
import logo from '../images/logo-standard.png';
import whiteLogo from '../images/logo-white.png';

const NavBar = ({ minimal, authToken, setShowModal, showModal, setIsSignUp  }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' 
                    src={minimal ? logo : whiteLogo} 
                    alt='logo'/>
            </div>
            {!authToken && !minimal && <button className='nav-button' onClick={handleClick} disabled={showModal}>
                    Log In
                </button>}
        </nav>
    );
}

export default NavBar;
