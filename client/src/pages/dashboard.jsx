import React, { useState, useEffect } from 'react';
import { CheckSession } from '../services/auth';
import axios from 'axios';
import { BASE_URL } from "../globals/index";
import UserForm from '../components/UserForm';
import ProductForm from '../components/ProductForm';
import { useNavigate } from 'react-router-dom';
import Client from '../services/api';
import VendorDetails from './vendorDetails';


export default function Dashboard(props) {
    const navigate = useNavigate()
    const authUser = props.authUser
    let userDetailsArray = [];
    const [userDetails, setUserDetails] = useState(userDetailsArray);
    
    const GetUserDetails = async() => {
        if(authUser){
        const response =  await axios.get(`${BASE_URL}/users/${authUser.id}`)
            setUserDetails(response.data);
        } else {
            navigate('/register')
        }
    }
    
    useEffect( () => {
        if (!props.authenticated || !authUser.id) {
            console.log('not logged in')
            return
        }
        Client.get(`api/users/${authUser.id}`)
        .then(userDetails => {
            console.log(authUser.id, userDetails)
            setUserDetails(userDetails.data)
        })
    }, [authUser, props.authenticated])

        return(
                    
            <div>
                <h1>  <br /> {userDetails.name}</h1>
                <img src= {userDetails.image}/>
                <UserForm
                authUser={authUser}
                />
                <ProductForm />



                
            </div>
      
    )

}