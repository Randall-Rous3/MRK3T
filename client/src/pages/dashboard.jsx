import React, { useState, useEffect } from 'react';
import { CheckSession } from '../services/auth';
import axios from 'axios';
import { BASE_URL } from "../globals/index";
import UserForm from '../components/UserForm';
import ProductForm from '../components/ProductForm';
import { useNavigate } from 'react-router-dom';
import Client from '../services/api';
import VendorDetails from './vendorDetails';
import DeleteAccount from '../components/DeleteAccount';


export default function Dashboard(props) {
    const navigate = useNavigate()
    const authUser = props.authUser
    let userDetailsArray = [];
    const [userDetails, setUserDetails] = useState(userDetailsArray);

    const GetUserDetails = async () => {
        if (authUser) {
            const response = await axios.get(`${BASE_URL}/users/${authUser.id}`)
            setUserDetails(response.data);
        } else {
            navigate('/register')
        }
    }

    useEffect(() => {
        Client.get(`api/users/${authUser.id}`)
            .then(userDetails => {
                setUserDetails(userDetails.data)
            })
    }, [authUser, props.authenticated])

    return (

        <div>
            <div className='info'>
                <h1> {userDetails.name}</h1>
                <img className='dash-img' src={userDetails.image} />
                <p>{userDetails.address}</p>
                <p>{userDetails.email}</p>
                <p>{userDetails.contact_info}</p>
            </div>
            <div className='update-and-delete-form'>
                <UserForm
                    authUser={authUser}
                />
                <DeleteAccount 
                name = {userDetails.name}
                />
            </div>
            <ProductForm />




        </div>

    )

}