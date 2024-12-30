import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContext from './context/AppContext.jsx'
import Layout from './Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <Layout />
  </AppContext>,
)
