import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/internalApiService';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error.response))
    }, [])
    return (
        <div>
            <h1 className="p-1">All products</h1>
            <table className="table table-striped">
                <thead  className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={`/products/${product._id}`} className="m-1">View</Link> 
                                    | 
                                    <Link to={`/products/${product._id}/edit`} className="m-1">Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts;