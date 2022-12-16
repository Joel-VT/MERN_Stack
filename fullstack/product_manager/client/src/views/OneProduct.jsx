import {useParams, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOneProduct, deleteProduct } from '../services/internalApiService';

const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate(); 

    useEffect(() => {
        getOneProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.log(error.response))
    }, [id]);

    const handleDelete = (e) => {
        deleteProduct(product._id)
            .then((data) => {
                console.log("deleted: ", data)
                navigate("/products");
            })
            .catch((error) => console.log(error.response))
    }

    return (
        <div className='w-50 mx-auto text-center shadow rounded border p-4'>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <Link to={`/products/${product._id}/edit`} className="btn btn-dark mx-2">Edit</Link>
                <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    )
}

export default OneProduct;