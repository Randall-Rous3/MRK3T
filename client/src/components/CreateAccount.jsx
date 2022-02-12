import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const iState = {
  name: '',
  email: '',
  image: '',
  password: '',
  confirmPassword: '',
  departmentId: ''
} 

export default function Register(props) {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
    departmentId:''
  })
  const password = formValues.password
  const passwordConfirm = formValues.confirmPassword
  const name = formValues.name

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 7) {
      alert("Your password must be at least 7 characters long")
      console.log(password.length)
    } else if (password !== passwordConfirm) {
      alert("Your passwords do not match")
    } else if (name && password === passwordConfirm && password.length >= 7) {
      await RegisterUser({
        name: formValues.name,
        email: formValues.email,
        image: formValues.image,
        password: formValues.password,
        departmentId: formValues.departmentId
      })
      setFormValues(iState)
      navigate('/login')
      alert("You\'ve sucessfully registered!")
    } else {
      console.log('error')
    }
  }
 
  return (
    <div className="register-form">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            {/* <label htmlFor="Username">username</label> */}
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="name"
              value={formValues.name}
              required
            />
            </div>
            <div>
            <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="image url"
              value={formValues.image}
              required
            />
          </div>
          <div className="input-wrapper">
            {/* <label htmlFor="email">Email</label> */}
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="FarmyFarm@gmail.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            {/* <label htmlFor="password">Password</label> */}
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder='Password'
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder='Confirm Passward'
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input
              onChange={handleChange}
              type="departmentId"
              name="departmentId"
              placeholder='departmentId (2) for food, (3) for beverage (4) for wares'
              value={formValues.departmentId}
              required
            />
          </div>
          <button type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
