import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const AppContext = ({ children }) => {

    const [store, setStore] = useState({
        isLogged: true,
        //currentUser: null,
        currentUser: {
            email: 'admin@gmail.com',
            admin: true,
            token: '123412341234'
        },
    })
    const [actions] = useState({})

    useEffect(() => {

    }, [])

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext