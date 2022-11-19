import React, { useState, useEffect } from 'react'
import Product from './Product';

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const API_URL = 'https://fakestoreapi.com/products'


    const getProducts = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    const getCategories = () => {
        fetch(`${API_URL}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }
    const getProductsInCategory = (catName) => {
        fetch(`${API_URL}/categories/${catName}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }



    useEffect(() => {
        getProducts();
        getCategories();
    }, [])


    return (
        <div>
            <h1>Our Products</h1>
            <div className="container">
                <button
                    className="btn btn-info m-3"
                    onClick={() => {
                        getProducts();
                    }}
                >ALL</button>
                {categories.map((cat) => {
                    return (
                        <button key={cat}
                            className="btn btn-info m-3"
                            onClick={() => {
                                getProductsInCategory(cat);
                            }}
                        >{cat}</button>
                    )
                })}
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-3 h-50" key={product.id}>
                                    <Product product={product} showButton={true} show={true} />
                                </div>
                            )
                        })
                    }
                </div>

            </div >
        </div >
    )
}

export default ProductList;
