import React from 'react';

function Button({ children, onClick, variant = 'primary' }) {
    return (
        <button className={`btn btn-${variant} mx-2`} onClick={onClick}> {children} </button>
    );
}

export default Button;
