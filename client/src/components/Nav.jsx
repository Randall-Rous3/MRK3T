import React from "react";
import { Link } from 'react-router-dom'

const Nav = (props) => {
const authenticated = props.authenticated

return(
<div>
    <nav>
        <Link to='/'>MRK3T</Link>
        <Link to='/register'>Create Account</Link>
        <Link to='/login'>Login</Link>
    </nav>
</div>
)
}
export default Nav