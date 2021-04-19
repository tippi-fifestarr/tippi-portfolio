import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p 
                onClick={() => onRouteChange('SignOut')}
                className='f3 link dim black underline pa3 pointer'> sign out </p>
        </nav>
        );
        } else {
            return (
                <nav 
                    style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                    onClick={() => onRouteChange('SignIn')}
                    className='f3 link dim black underline pa3 pointer'> sign in </p>
                <p 
                    onClick={() => onRouteChange('Register')}
                    className='f3 link dim black underline pa3 pointer'> sign up </p>
                </nav>
            );
        }
}

export default Navigation;