import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, isLogged, admin, adminRequired=false }) => {

    if (!isLogged) return <Navigate to="/login" replace={true} />

    if(adminRequired)
        //if(!admin) return <Navigate to="/admin-required" replace={true} />
        if(!admin) return <h4>Solo Administradores</h4>

    return children
}

export default ProtectedRoute