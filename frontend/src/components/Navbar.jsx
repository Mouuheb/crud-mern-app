import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-p' >
        <h1>$</h1>
        <div className='cmp'>
            <Link to={"/"}>Product Store 🛒</Link>
            <Link to={"/create"}>Create Product 🛒</Link>
        </div>
    </div>
  )
}

export default Navbar