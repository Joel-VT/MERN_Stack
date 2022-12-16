import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const {initialFormData, onSubmit} = props;
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
        .then((data) => {
            console.log('Product:', data);
            navigate(`/products/${data._id}`)
        })
        .catch((error) => {
            console.log(error.response);
            setErrors(error.response?.data?.errors);
        })
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Product:</h2>
            <form onSubmit={(e) =>{handleSubmit(e)}} className='mx-auto my-1'>
                <div className='row mb-3'>
                    <label htmlFor="title" className='col-sm-2 col-form-label'>Title:</label>
                    <input type="text" name="title" id="title" className='form-control' onChange={handleFormChanges} value={formData.title}/>
                    {
                        errors?.title && <p className='text-danger'>{errors.title.message}</p>
                    }
                </div>
                <div className='row mb-3'>
                    <label htmlFor="price" className='col-sm-2 col-form-label'>Price:</label>
                    <input type="number" name="price" id="price" className='form-control' onChange={handleFormChanges} value={formData.price}/>
                    {
                        errors?.price && <p className='text-danger'>{errors.price.message}</p>
                    }
                </div>
                <div className='row mb-3'>
                    <label htmlFor="description" className='col-sm-2 col-form-label'>Description:</label>
                    <input type="text" name="description" id="description" className='form-control' onChange={handleFormChanges} value={formData.description}/>
                    {
                        errors?.description && <p className='text-danger'>{errors.description.message}</p>
                    }
                </div>
                <button type='submit' className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
}


export default ProductForm;