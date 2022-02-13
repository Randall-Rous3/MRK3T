import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DepartmentForm from '../components/DepartmentForm'
import ProductForm from '../components/ProductForm'
import Footer from '../components/Footer'

export default function LandingPage() {

    const navigate = useNavigate()

    return (
        <div className='welcome'>
            <div className='welcome-description'>
                <img className="landing-img" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F151674-flowers-nature-garden.jpg&f=1&nofb=1' />
            </div>
            <h2 className='intro'>MRK3T is an online producer to business platform.<br /> A farmer's market to restaurant concept.<br /> MRK3T gives producers of edibles and drinkables a place to showcase their goods and contact information to be viewed by buyers. <br/>A place for conscientious restaurateurs to view their local options in leu of going with the big box option. <br /> Things made by people for people.  </h2>
            <div className='restaurant'>
                <img className="landing-img" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ibs-uae.com%2Finnovate%2Fwp-content%2Fuploads%2F2017%2F04%2FBu-Restaurant-and-Lounge.jpg&f=1&nofb=1' />

            </div>
        </div >

    )
}
