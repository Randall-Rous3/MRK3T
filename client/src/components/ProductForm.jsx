import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from '../services/auth';
import { BASE_URL } from "../globals/index";



export default function ProductForm({ props }) {
    const [product, setProduct] = useState({
        name: '',
        userId: '',
        price: '',
        quantity: '',
        description: '',
        image: '',



    })


    const createProduct = () => {
        const newProduct = {
            ...product
        };
        axios
            .post(`${BASE_URL}/products`, newProduct)
            .then(() =>
                setProduct({
                    name: '',
                    price: '',
                    quantity: '',
                    image: '',
                    userId: '',
                    description: '',

                }))

    }


    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        createProduct()
        alert(`your product ${product.name} has been posted`)

    }




    return (
        <div className=''>
            <form className='product-form' onSubmit={handleSubmit}>
                <h1>Add products</h1>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    placeholder=' name'
                    value={product.name}
                />
                <input
                    onChange={handleChange}
                    type='integer'
                    name='price'
                    placeholder='price'
                    value={product.price}
                />                <input
                    onChange={handleChange}
                    type='integer'
                    name='userId'
                    placeholder='UserId'
                    value={product.userId}
                />
                <input
                    onChange={handleChange}
                    type='integer'
                    name='quantity'
                    placeholder='quantity'
                    value={product.quantity}
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='image'
                    placeholder='image url'
                    value={product.image}
                />
                <input
                    onChange={handleChange}
                    type='textfield'
                    name='description'
                    placeholder='description'
                    value={product.description}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    )

}
