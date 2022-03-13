import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Product from './Product';
import axios from 'axios';
import {setProduct} from '../redux/actions/ProductActions'

function ProductListing() {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    // console.log(products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProduct = async ()=>{

        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) =>{
            console.log(err);
        });
        console.log("res: ",response.data)
        dispatch(setProduct(response.data));
        if (dispatch(setProduct(response.data))){
            console.log("Done")
        }
    }
    
    useEffect(()=>{
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log("Products: ",products)

    return (
        <div className="ui grid container">
            <Product/>
        </div>
    )
}

export default ProductListing;





