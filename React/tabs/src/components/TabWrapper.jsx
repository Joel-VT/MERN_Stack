import React, { useState } from 'react';
import Tabs from './Tabs';
import DisplayTab from './DisplayTab';

const TabWrapper = (props) => {
    const { tabs, setTabs } = props;

    const handleClick = (e, i) => {
        let newTabs = [...tabs];
        newTabs.forEach((tab) => tab.isSelected = false);
        newTabs[i] = {...newTabs[i], isSelected: true}
        setTabs(newTabs);
    }

    const styleButton = (i) => {
        return tabs[i].isSelected ? {backgroundColor: 'black', color: 'white'} : {}
    }

    return (
        <>
            {
                tabs.map((tab, i) => 
                {
                    return <Tabs tab={tab} i={i} handleClick={handleClick} styleButton={styleButton} />
                })
            }
            <div style={{height: '200px', width: '30%', border: 'solid black 2px', margin: '10px auto'}}>
            {
                tabs.map((tab, i) => {
                    return <DisplayTab tab={tab} i={i} />
                })
            }
            </div>
        </>
    )
}

export default TabWrapper;