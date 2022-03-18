import React,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {selectedProduct,removeSelectedProduct} from '../../redux/actions/ProductActions';
import './ProductDetails.css';

function ProductDetails() {
  const {productId} = useParams();
  console.log(productId)
  const product = useSelector((state)=>state.allProducts.products[`${productId-1}`]);
  const dispatch = useDispatch();
  console.log(product)
  const {title,image,price,category,description} = product

   // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProduct = async ()=>{

    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>{
        console.log(err);
    });
    console.log("res: ",response.data)
    dispatch(selectedProduct(response.data));
    if (dispatch(selectedProduct(response.data))){
        console.log("Done")
    }
  }

  useEffect(()=>{
      if (productId && productId==='') fetchProduct();
        return ()=>{
          dispatch(removeSelectedProduct())
        }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[productId]);
  console.log("The Product is: ",product)

    
        return(
          <div className="ui grid container">
            {Object.keys(product).length === 0 ?(
              <div>...Loading</div>
            ):(
            <div className="ui placeholder segment">
              <div className="ui two column stackable centered aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="ui middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src={image} alt=""/>
                  </div>
                  <div className="column rp">
                    <h1>{title}</h1>
                    <h2>
                      <a className="ui teal tag label" href="#">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          )
}

export default ProductDetails;