import React from 'react'
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const { createProduct } = useProductStore();
    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        if (!success) {
            // toast({
            // 	title: "Error",
            // 	description: message,
            // 	status: "error",
            // 	isClosable: true,
            // });
        } else {
            // toast({
            // 	title: "Success",
            // 	description: message,
            // 	status: "success",
            // 	isClosable: true,
            // });
        }
        setNewProduct({ name: "", price: "", image: "" });
    };
    return (
        <div className='create-p' >
            <div className='cmp' >
                <input
                    placeholder='Product Name'
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    placeholder='Price'
                    name='price'
                    type='number'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    placeholder='Image URL'
                    name='image'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <button onClick={handleAddProduct}>
                    Add Product
                </button>
            </div>

        </div>
    )
}

export default CreatePage