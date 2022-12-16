import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const ShowComponent = (props) => {
    const { searchSource, searchId } = useParams();
    const [result, setResult] = useState({});
    const [err, setErr] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${searchSource}/${searchId}`)
            .then(response => setResult(response.data))
            .catch(err => setErr(err));
        setErr(null);
    }, [searchSource, searchId]);

    const attributes = Object.keys(result);

    return (
        <>
            {
                !err ?
                    <div>
                        <h1>{result[attributes[0]]}</h1>
                        <div style={{ marginTop: '10px' }}>
                            <p><span style={{ fontWeight: 'bold' }}>{attributes[1]}:</span> {result[attributes[1]]}</p>
                            <p><span style={{ fontWeight: 'bold' }}>{attributes[2]}:</span> {result[attributes[2]]}</p>
                            <p><span style={{ fontWeight: 'bold' }}>{attributes[3]}:</span> {result[attributes[3]]}</p>
                            <p><span style={{ fontWeight: 'bold' }}>{attributes[4]}:</span> {result[attributes[4]]}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <h1 style={{ color: 'red' }}>These aren't the droids you're looking for!</h1>
                            <img src="/obi.jpg" alt="obi wan" />
                        </div>
                    </div>
            }
        </>
    );
}

export default ShowComponent;