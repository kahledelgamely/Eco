import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from './Product';


const Details = () => {

    const [product, setProduct] = useState({})


    const API_URL = 'https://fakestoreapi.com/products'


    const params = useParams();

    useEffect(() => {
        fetch(`${API_URL}/${params.productId}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    },)


    return (
        <div className='container'>
            <Product product={product} showButton={false} desc={true} show={false} className="pro-det" />
        </div>
    )
}

export default Details;