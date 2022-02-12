import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from '../globals/index'





export default function DeleteAccount(props) {
    const navigate = useNavigate()



    const deleteAccount = async () => {
        const response = await axios.delete(`${BASE_URL}/users/${props.userId}`)
        .then(() => {
            alert(`Your profile, "${props.userName}," has been deleted.`)
          })

    };



    const confirmDeletion = (e) => {
        const confirmDeletion = window.confirm(`Are you sure you want to delete ${props.name}?`)
        if (confirmDeletion) {
          deleteAccount()
        }
      }

    const handleSubmit = async (e) => {
        confirmDeletion()
        navigate(`/`)

    }


    return (

        <div>

                <button className="delete-button" onClick={handleSubmit}>
                    Delete Account
                </button>
        </div>

    )
}