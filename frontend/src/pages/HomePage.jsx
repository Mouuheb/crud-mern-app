import React from 'react';
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import Ship from "../model/Ship";

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();
    useEffect(() => {
    	fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);
    return (
        <div className='home-p'>
            <div className='model'>
                <div className='p1'>
                    <Ship/>
                </div>
                <div className='title'>
                <h1 >The viking store</h1>
                </div>
                
            </div>
            <div className='card-cnt'>
                {products.map((product) => (
                    <div className='card' key={product._id}>
                        <ProductCard key={product._id} product={product} />
                    </div>
						
				))}

                {products.length === 0 && (
                    <div className='pr-cnt' >
                        <p >
						No products found 😢{" "}
						<Link to={"/create"}>
							<span>
								Create a product
							</span>
						</Link>
					</p>
                    </div>
					
				)}
                
                
            </div>
        </div>
    )
}

export default HomePage