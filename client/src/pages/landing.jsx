import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DepartmentForm from '../components/DepartmentForm'

export default function LandingPage() {

    const navigate = useNavigate()

    return (
        <div className='welcome'>
            <div className='welcome-description'>
                <Link to = '/register'></Link>
                <DepartmentForm/>
            </div>
            <div>

            </div>
        </div >

    )
}
