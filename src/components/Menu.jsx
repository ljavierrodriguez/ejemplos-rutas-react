import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to={"/products"}>Products</Link> | <Link to={"/admin"}>Admin</Link>
        </nav>
    )
}

export default Menu