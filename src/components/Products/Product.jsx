import './Product.css';

import { Link } from 'react-router-dom';
import React from 'react';
import{useSelector} from 'react-redux';

const Product = ()=> {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) =>{
        const {id,title,image,price,category} = product
        return (
            <div className="product__container" key ={id}>
                <Link to={`/product/${id}`}>
                    <div className="product__card__container">
                        <img className="product__image"src={image} alt={title}/>
                        <div className="product__content">
                            <div className="product__content__header">
                                {title}
                            </div>
                            <div className="product__content__price">
                                ${price}
                            </div>
                            <div className="product__content__category">
                                {category}
                            </div>
                        </div>
                    </div>
                </Link>      
            </div>
        );
    })

    return(
    <>
        {renderList}
    </>
        
    )
}

export default Product;