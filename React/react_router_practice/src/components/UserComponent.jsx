import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserComponent = (props) => {
    const { userinput } = useParams();
    console.log(userinput);
    return(
        <>
            <h1>
            {
                isNaN(+userinput) ? `The word is: ` : `The number is: `
            }
            {userinput}
            </h1>
            <Link to={"/"}>Go to Home</Link>
        </>
    );
}

export default UserComponent;