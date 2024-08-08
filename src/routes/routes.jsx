import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import { Navigate } from 'react-router-dom'

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="home" /> 
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    }
]

export default routes