import React from 'react'
import { Outlet } from 'react-router-dom'
import SubMenu from '../components/Submenu'

const Admin = () => {
    return (
        <>
        <div>Admin</div>
        <SubMenu />
        <Outlet />
        </>
    )
}

export default Admin