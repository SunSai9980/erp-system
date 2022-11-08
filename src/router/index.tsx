import { useRoutes, RouteObject } from 'react-router-dom'
import React,{ lazy } from 'react'
import Login from '@views/login'
import Home from '@views/Home'

const List = lazy(() => import('@views/List'))

const GetRoutes = () => {
  const data: RouteObject[] = [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/list',
      element: <List/>
    }
  ]
  return useRoutes(data)
}

export default GetRoutes
