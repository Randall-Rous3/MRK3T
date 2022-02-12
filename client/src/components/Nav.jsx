import React from "react";
import { Link } from 'react-router-dom'
const Nav = (props) => {
const authenticated = props.authenticated

if( authenticated){
return(
<div>
    <nav>
        <Link className="nav" to='/'>MRK3T</Link>
        <Link className="nav" onClick={props.handleLogOut} to="/">Logout</Link>
        <Link className="nav" to='/food'>Food</Link>
        <Link className="nav" to='/bev'>Bevreages</Link>
        <Link className="nav" to='/wares'>Wares</Link>
        <Link className="nav" to='/dashboard'>My account</Link>


    </nav>
</div>
)
} else {
    return(
        <div>
    <nav>
        <Link className="nav" to='/'>MRK3T</Link>
        <Link className="nav" to='/register'>Create Account</Link>
        <Link className="nav" to='/login'>Login</Link>
        <Link className="nav" to='/food'>Food</Link>
        <Link className="nav" to='/bev'>Bevreages</Link>
        <Link className="nav" to='/wares'>Wares</Link>


    </nav>
</div>

    )
}
}
export default Nav