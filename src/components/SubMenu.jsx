import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = () => {
    return (
        <nav>
            <Link to="/admin/juegos">Juegos</Link> | <Link to={"/admin/premios"}>Premios</Link>
        </nav>
    )
}

export default SubMenu