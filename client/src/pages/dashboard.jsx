import React, { useState, useEffect } from 'react';
import { CheckSession } from '../services/auth';
import axios from 'axios';
import { BASE_URL } from "../globals/index";


export default function Dashboard(props) {
    const authUser = props.authUser
    let userDetailsArray = [];
    const [userDetails, setUserDetails] = useState(userDetailsArray);
    
    const getUserDetails = async () => {
        const response = await axios.get(`${BASE_URL}/users/${authUser.id}`);
        setUserDetails(response.data);
    }
    
    useEffect(() =>{
        getUserDetails()
        CheckSession()
    }, [])

        return(
                    
            <div>

                <h1> your email: <br /> {userDetails.email}</h1>

                
            </div>
      
    )

}