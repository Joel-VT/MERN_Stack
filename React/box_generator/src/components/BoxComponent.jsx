import React, { useState } from 'react';

const BoxComponent = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState('50');
    const [validColor, setValidColor] = useState("");
    const [validHeight, setValidHeight] = useState("");
    const [allBoxes, setAllBoxes] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
        if (e.target.value.length < 3 && e.target.value.length !== 0) {
            setValidColor("Color has to be atleast 3 characters");
        }
        else {
            setValidColor("");
        }
    }

    const createBox = (e) => {
        e.preventDefault();
        const newBox = { 
            color, 
            height 
        };
        setAllBoxes([...allBoxes, newBox]);
        setColor("");
        setHeight('50');
    }


    return (
        <>
            <form onSubmit={createBox}>
                <div id='formLabel'>
                    <label htmlFor="Color">Color</label>
                    <input type="text" onChange={handleColor} id="color" value={color}/>
                    <label htmlFor="height">Height:</label>
                    <input type="text" onChange={ (e) => setHeight(e.target.value) } id="height" value={height}/>
                    <input type="submit" value="Add"/>
                </div>    
                {
                    validColor ? 
                    <p>{validColor}</p> :
                    ''
                }
            </form>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                { allBoxes ? allBoxes.map((newBox,i) =>
                    <div key={i} style={{backgroundColor: newBox.color, height: newBox.height + 'px', width: newBox.height + 'px', margin: '20px'}}></div>
                ) : <p></p>}
            </div>
        </>
    );
}

export default BoxComponent;