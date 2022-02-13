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
    const [updatedUser, setUpdatedUser] = useState({
        name: '',
        address: '',
        image: '',
        contact_info: '',
        seasons: '',
        deliver_services: '',

    })


    const updateUser = () => {
        const newUser = {
            ...updatedUser
        };
        axios
            .put(`${BASE_URL}/users/${userDetails.id}`, newUser)
            .then(() =>
                setUpdatedUser({
                    name: '',
                    address: '',
                    image: '',
                    contact_info: '',
                    seasons: '',
                    deliver_services: '',
                }))

    }


    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        updateUser()
        e.preventDefault()

    }



    useEffect(() => {
        Client.get(`api/users/${authUser.id}`)
            .then(userDetails => {
                setUserDetails(userDetails.data)
            })
        console.log(authUser)
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
            <div className='dash-form-grid'>
                <div className='update-and-delete-form'>
                    <form className='user-form' onSubmit={handleSubmit}>
                        <h1>Update Info</h1>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='name'
                            placeholder='business name'
                            value={updatedUser.name}
                        />
                        <input
                            onChange={handleChange}
                            type='text'
                            name='image'
                            placeholder='image url'
                            value={updatedUser.image}
                        />
                        <input
                            onChange={handleChange}
                            type='text'
                            name='address'
                            placeholder='address'
                            value={updatedUser.address}
                        />
                        <input
                            onChange={handleChange}
                            type='textfield'
                            name='contact_info'
                            placeholder='contact information'
                            value={updatedUser.contact_info}
                        />
                        <input
                            onChange={handleChange}
                            type='text'
                            name='seasons'
                            placeholder='seasons available'
                            value={updatedUser.seasons}
                        />
                        delivery service?
                        <select
                        value={updatedUser.deliver_services}
                        onChange={handleChange}
                        name={'delivery_services'}>
                            <option> true </option>
                            <option> false </option>
                        </select>
                        <button type='submit'>update</button>
                    </form>
                    <DeleteAccount
                        userId={userDetails.id}
                        name={userDetails.id}
                    />
                </div>
                <ProductForm
                    user={userDetails}
                />
            </div>




        </div>

    )

}