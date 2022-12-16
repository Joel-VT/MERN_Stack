import { createAuthor } from '../services/internalApiService';
import { Link } from 'react-router-dom';

import AuthorForm from '../components/AuthorForm';

const NewAuthor = (props) => {
    const formData = {
        name: ""
    }

    return (
        <>
            <Link to='/authors' className='btn btn-sm btn-outline-primary mx-1'>
                Home
            </Link>
            <p>Add a new author:</p>
            <AuthorForm initialFormData={formData} onSubmit={createAuthor} />
        </>
    )
}

export default NewAuthor;