import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const {initialFormData, onSubmit} = props;
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
        .then((data) => {
            console.log('Author:', data);
            navigate(`/authors`)
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
            <form onSubmit={(e) =>{handleSubmit(e)}} className='mx-auto my-1'>
                <div className='row mb-3'>
                    <label htmlFor="name" className='col-sm-2 col-form-label'>Name:</label>
                    <input type="text" name="name" id="name" className='form-control' onChange={handleFormChanges} value={formData.name}/>
                    {
                        errors?.name && <p className='text-danger'>{errors.name.message}</p>
                    }
                </div>
                <Link to={`/authors`} className="me-1 btn btn-primary">Cancel</Link>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}


export default AuthorForm;