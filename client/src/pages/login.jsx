import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from '../components/LogIn'

export default function LogInPage(props) {


    return (
        <div className='log-in'>
            <div >
                <h1>Log In</h1>
                <LogIn 
                    setAuthUser={props.setAuthUser}
                    authUser={props.authUser}
                    toggleAuthenticated={props.toggleAuthenticated}
                    authenticated={props.authenticated}/>
            </div>
            <div>

            </div>
        </div >

    )
}