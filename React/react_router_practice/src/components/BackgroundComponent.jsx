import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BackgroundComponent = (props) => {
    const { userinput, color1, color2 } = useParams();

    return (
    <>
        <h1 style={{color: color1, backgroundColor: color2}}>
            {
                isNaN(+userinput) ? `The word is: ` : `The number is: `
            }
            {userinput}
        </h1>
        <Link to={"/"}>Go to home</Link>
    </>
    );
}

export default BackgroundComponent;