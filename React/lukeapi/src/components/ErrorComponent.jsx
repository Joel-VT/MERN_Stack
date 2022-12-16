import React from 'react';

const ErrorComponent = (props) => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>These aren't the droids you're looking for!</h1>
            <img src="/obi.jpg" alt="obi wan" />
        </div>
    );
}

export default ErrorComponent;