import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateAuthor, getOneAuthor } from '../services/internalApiService';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        getOneAuthor(id)
            .then((data) => {
                setFormData(data)
                setLoaded(true)
            })
            .catch((error) => console.log(error.response))
    }, [id])

    console.log(formData);

    return (
        <>
            <Link to='/authors' className='btn btn-sm btn-outline-primary mx-1'>
                Home
            </Link>
            <p>Edit this author</p>
            {loaded && <AuthorForm onSubmit={updateAuthor} initialFormData={formData} />}
        </>
    )
}

export default EditAuthor;