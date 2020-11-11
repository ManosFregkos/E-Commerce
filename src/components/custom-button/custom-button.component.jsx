import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,...otherProps}) => {
    //ta other props tou button einai to type"submit" kai to children einai to Sign in
    return(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} {...otherProps}>
        {children}

    </button>

    )
    }

export default CustomButton;