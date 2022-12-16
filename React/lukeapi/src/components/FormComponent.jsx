import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = (props) => {
    const [search, setSearch] = useState(props.sources[0]);
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewSearch( search );
        props.onNewId( id );
        navigate(`/${search}/${id}`);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <label htmlFor="search">Search for:</label>
            <select value={search} onChange={e => setSearch(e.target.value)} style={{marginRight:'20px', marginLeft: '5px'}}>
                {props.sources.map( (source, idx) => 
                    <option key={idx} value={source}>{source}</option>
                )}
            </select>
            <label htmlFor="id">ID:</label>
            <input type="number" value={id}  onChange={e => setId(e.target.value)} id="id" style={{marginRight: '20px', marginLeft: '5px'}}/>
            <input type="submit" value="Search" style={{backgroundColor: 'blue', borderRadius: '8px'}}/>
        </form>
    );
}


export default FormComponent;