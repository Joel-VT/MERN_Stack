import React from "react";

const Tabs = (props) => {

    const {tab, i, handleClick, styleButton} = props;

    return (
        <button className='btn-group' role="group" key={i} onClick={(e) => { handleClick(e, i) }} style={styleButton(i)}>
            {tab.name}
        </button>
    )
}

export default Tabs;