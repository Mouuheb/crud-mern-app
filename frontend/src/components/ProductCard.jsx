import React from 'react';
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const { deleteProduct, updateProduct } = useProductStore();
    const [up, setUp] = useState(false);

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        // if (!success) {
        // 	toast({
        // 		title: "Error",
        // 		description: message,
        // 		status: "error",
        // 		duration: 3000,
        // 		isClosable: true,
        // 	});
        // } else {
        // 	toast({
        // 		title: "Success",
        // 		description: message,
        // 		status: "success",
        // 		duration: 3000,
        // 		isClosable: true,
        // 	});
        // }
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        setUp(false)
        // onClose();
        // if (!success) {
        // 	toast({
        // 		title: "Error",
        // 		description: message,
        // 		status: "error",
        // 		duration: 3000,
        // 		isClosable: true,
        // 	});
        // } else {
        // 	toast({
        // 		title: "Success",
        // 		description: "Product updated successfully",
        // 		status: "success",
        // 		duration: 3000,
        // 		isClosable: true,
        // 	});
        // }
    };
    return (
        <div className='card-p'>
            {up ===false &&(<><div className='img-cnt' >
                <img src={product.image} alt={product.name} />
            </div>

            <div className='f-card' >
                <div className='text-cmp'>
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                </div>
                <div className='btn-cnt' >
                    <button className='btn-p' onClick={() => setUp(true)} >Edit</button>
                    <button className='btn-s' onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                </div>
            </div></>)}

            {up === true && (
                <div className='f-card-up'>
                    <div className='text-cmp'>
                        <input
                            placeholder='Product Name'
                            name='name'
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                        />
                        <input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                        />
                        <input
                            placeholder='Image URL'
                            name='image'
                            value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                        />
                    </div>
                    <div className='btn-cnt' >
                        <button className='btn-p' onClick={() => handleUpdateProduct(product._id, updatedProduct)} >Edit</button>
                        <button className='btn-s' onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </div>

                </div>


            )}

        </div>
    )
}

export default ProductCard