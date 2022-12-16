import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <>
            <h1>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h1>
            <Link to='/authors/new' className='btn btn-sm btn-outline-primary'>
                Add
            </Link>
        </>
    )
}
export default NotFound;