import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals/index";
import {Link, useNavigate} from 'react-router-dom'



const ProductDetails = (props) => {
    let navigate = useNavigate()
    let detailsArray = [];
    let productDetailsArray = []
    const [productDetails, setProductDetails] = useState(productDetailsArray)

    const getDetails = async (user) => {
        const response = await axios.get(`${BASE_URL}/${window.location.pathname}`);
        setProductDetails(response.data)
        console.log(productDetails)
    };


    useEffect(() => {
        getDetails();
    }, []);
 
    return (
        <div className="product-details-grid">
            <div className="product-details">
                <h1 className="name"> {productDetails.name} </h1>
                <img className="thumbnail-img" src={productDetails.image} alt={productDetails.name} />
                <h3 className="name"> {productDetails.description} </h3>
                <h4 className="name"> ${productDetails.price}/unit </h4>
                <p className="name"> amount available:{productDetails.quantity} </p>
                <button>Buy</button>
            </div>

  
        </div>
    )
}

export default ProductDetails