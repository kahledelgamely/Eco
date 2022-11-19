import React, { useState } from 'react'
import "./product.css"
import { Link } from 'react-router-dom'

export const Product = (props) => {
    const [readMore, setReadMore] = useState(true)

    const { product, showButton, desc, show } = props

    return (

        <div className="card">
            <img src={product.image} alt="..." className={show ? "card-img-top img-style" : "card-img-top pro-det"} />
            <div div className="card-body" >
                <h5 className="card-title">
                    {desc && product.description}
                    {product.description && product.title.slice(0, 22)}

                </h5>

                <p className="card-text">
                    {desc && product.description}
                    {readMore ? product.description && product.description.slice(0, 30) : product.description}
                    {show && <span className='btn' onClick={() => setReadMore(!readMore)}>...{readMore ? " ShowMore" : " ShowLess "}</span>}
                </p>
                {
                    showButton ?
                        <Link className='btn btn-primary' to={`/product/${product.id}`}>Details</Link>
                        :
                        <Link to={`/`} className='btn btn-primary'> Back To Home</Link>
                }
            </div >
        </div >

    )
}

export default Product;