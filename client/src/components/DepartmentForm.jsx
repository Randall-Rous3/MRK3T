import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from '../services/auth';
import { BASE_URL } from "../globals/index";



export default function DepartmentForm ({props}) {
    const [department, setDepartment] = useState({
        name: '',
        image: '',


    })


    const createDepartment = () => {
        const newDepartment = {
            ...department
        };
        axios
            .post(`${BASE_URL}/departments`, newDepartment)
            .then(() =>         
                setDepartment({
                    name: '',
                    image:'',
                   

                }))

            }


    const handleChange = (e) => {
        setDepartment({ ...department, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        createDepartment()

    }

    useEffect(() => {
        CheckSession()
    }, []);


    return (
        <div className='dashboard'>
            <form className='user-form' onSubmit={handleSubmit}>
                <h1>Add products</h1>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    placeholder=' name'
                    value={department.name}
                />               
                <input
                    onChange={handleChange}
                    type='text'
                    name='image'
                    placeholder='image url'
                    value={department.image}
                />
                <button type = 'submit'>submit</button>
            </form>
        </div>
    )

}
