import React, { useState } from 'react';

const AuthModal = ({ setShowModal, isSignUp }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if( isSignUp && (password !== confirmPassword)){
                setError('Passwords need to match!')
            }
            console.log('make a post request to our database')
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div className="auth-modal">
            <div className='close-icon' onClick={handleClick} >X</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log IN, you agree to our terms. Learn how we process your data in our Privacy Policy</p>
            <form onSubmit={(e) => handleSubmit} >
                <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    name='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value )}
                />
                <input
                    type='password'
                    id='password'
                    placeholder='Password'
                    name='password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value )}
                />
                {isSignUp && <input
                    type='password'
                    id='password-check'
                    placeholder='Confirm your password'
                    name='password-check'
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value )}
                />}
                <input className='secondary-button' type='submit' />
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>
            
        </div>
    );
}

export default AuthModal;
