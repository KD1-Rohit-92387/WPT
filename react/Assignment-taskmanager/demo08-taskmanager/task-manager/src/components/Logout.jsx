import React from 'react'
import { Link } from 'react-router';

function Logout() {
  return (
    <div className='form-group mb-3'>

    <h3>Thank You </h3>
    <Link className='btn btn-primary mx-3' to="/login">Login</Link>

    
    </div>
  )
}

export default Logout
