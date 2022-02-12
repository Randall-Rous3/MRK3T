import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals/index";
import ProductCard from '../components/ProductCard'
import {Link, useNavigate} from 'react-router-dom'



const VendorDetails = (props) => {
    let navigate = useNavigate()
    let detailsArray = [];
    let productDetailsArray = []
    const [userDetails, setUserDetails] = useState(detailsArray)
    const [productDetails, setProductDetails] = useState(productDetailsArray)

    const getDetails = async (user) => {
        const response = await axios.get(`${BASE_URL}/${window.location.pathname}`);
        setUserDetails(response.data);
        setProductDetails(response.data.owner)
    };


    useEffect(() => {
        getDetails();
    }, []);



    return (
        <div className="profile-layout-grid">
            <div className="name-and-pic">
                <h1 className="name"> {userDetails.name} </h1>
                <img className="dash-img" src={userDetails.image} alt={userDetails.name} />
            </div>
            <div className="details">
                address: 
                <h2>{userDetails.address}</h2>
                contact:
                <h2> {userDetails.contact_info}</h2>
                hours: 
                <h2>{userDetails.hours}</h2>
                products:
                {/* <h2>{productDetails.name}</h2> */}
                <div className="thumbnail-grid">
        {productDetails.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onClick= {()=> navigate(`/products/${product.id}`)
        }
        />
      ))} 
    </div>

  


            </div>
        </div>
    )
}

export default VendorDetails