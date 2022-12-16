import { createProduct } from '../services/internalApiService';

import ProductForm from '../components/ProductForm';

const NewProduct = (props) => {
    const formData = {
        title: "",
        price: 0,
        description: ""
    }

    return (
        <ProductForm initialFormData={formData} onSubmit={createProduct}/>
    )
}

export default NewProduct;