import React from 'react'
import { useRoutes } from 'react-router-dom'
import Mainlayout from './mainLayout/mainlayout'
import Landing from './pages/landing/landing'
const Route = () => {
    return useRoutes([
        {
            path: "/",
            element: <Mainlayout/>,
            children: [
                {
                    path: "/",
                    element: <Landing/>, 
                }
            ]
        }
    ]

    )
}

export default Route