import React from 'react';

const Button = () => {

    const clickButton = () => {
        console.log('clicked')
    }

    return (
        <button onClick={clickButton}>MFE1 Button</button>
    )
};

export default Button;