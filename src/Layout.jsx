import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Products from './pages/Products'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Context } from './context/AppContext'
import ProtectedRoute from './pages/ProtectedRoute'
import Login from './pages/Login'
import Juegos from './pages/Juegos'

const Layout = () => {

    const { store, actions } = useContext(Context)

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/admin' element={
                    <ProtectedRoute isLogged={store?.isLogged} adminRequired={true} admin={store?.currentUser?.admin}>
                        <Admin />
                    </ProtectedRoute>
                }>

                    <Route path='juegos' element={<Juegos />} />
                    <Route path='*' element={<h1>Page not found (404)</h1>} />
                </Route>
                <Route path='/products' element={
                    <ProtectedRoute isLogged={store?.isLogged}>
                        <Products />
                    </ProtectedRoute>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/admin-required' element={<h1>Solo Administradores</h1>} />
                <Route path='*' element={<h1>Page Not Found (404)</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout