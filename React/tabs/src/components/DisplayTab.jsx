import React from "react";


const DisplayTab = (props) => {
    const { tab, i } = props;
    return (tab.isSelected && <p key={i}>{tab.message}</p>);
}

export default DisplayTab;