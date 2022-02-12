import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from '../services/auth';
import { BASE_URL } from "../globals/index";



export default function UserForm ({props}) {
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
            .put(`${BASE_URL}/users/${props.authUser.id}`, newUser)
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

    }

    useEffect(() => {
        CheckSession()
    }, []);


    return (
        <div className='dashboard'>
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
                <input 
                    onChange={handleChange}
                    type='text'
                    name='delivery_service'
                    placeholder='delivery options?'
                    value={updatedUser.deliver_services}
                />
                <button type = 'submit'>update</button>
            </form>
        </div>
    )

}


