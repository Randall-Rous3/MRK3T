import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

    const navigate = useNavigate()

    return (
        <div className='welcome'>
            <div className='welcome-description'>
                <Link to = '/register'></Link>
            </div>
            <div>

            </div>
        </div >

    )
}
