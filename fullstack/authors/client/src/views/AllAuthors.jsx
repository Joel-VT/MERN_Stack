import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAuthors, deleteAuthor } from '../services/internalApiService';

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllAuthors()
            .then((data) => setAuthors(data))
            .catch((error) => console.log(error.response))
    }, [])

    const handleDelete = (deleteAuthor) => {
        console.log(deleteAuthor);
        const newAuthor = authors.filter(author => author._id !== deleteAuthor._id)
        setAuthors(newAuthor);
        deleteAuthor(deleteAuthor._id)
            .then((data) => {
                console.log("deleted: ", data)
                navigate("/authors");
            })
            .catch((error) => console.log(error.response))
    }

    return (
        <div>
            <Link to='/authors/new' className='btn btn-sm btn-outline-primary'>
                Add an author
            </Link>
            <p className="p-1">We have quotes by:</p>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Authors</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/authors/${author._id}/edit`} className="me-1 btn btn-primary">Edit</Link>
                                    <button onClick={(e) => {
                                        deleteAuthor(author._id)
                                            .then((data) => {
                                                console.log("deleted: ", data)
                                                navigate("/authors");
                                            })
                                            .catch((error) => console.log(error.response))
                                    }} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;