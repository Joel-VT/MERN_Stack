import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateProduct, getOneProduct } from '../services/internalApiService';
import ProductForm from '../components/ProductForm';

const EditDestination = (props) => {
    const {id} = useParams();
    const [formData, setFormData] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        getOneProduct(id)
            .then((data) => {
                setFormData(data)
                setLoaded(true)
            })
            .catch((error) => console.log(error.response))
    }, [id])

    console.log(formData);

    return (
    <>
        {loaded && <ProductForm onSubmit={updateProduct} initialFormData={formData} />}
    </>
    )
}

export default EditDestination;