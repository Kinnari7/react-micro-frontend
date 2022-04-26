import React from 'react';

const Button = () => {

    const clickButton = () => {
        console.log('clicked');
    };

    return (
        <div>
            <h1 style={{ marginBottom: '10px' }}>Project 1</h1>
            <h2>Microfrontend</h2>
            <h4>Project 2 call project 1 component.</h4>
            <button onClick={clickButton}>Button</button>
        </div>
    );
};

export default Button;