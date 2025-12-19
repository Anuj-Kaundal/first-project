import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Applayout from './Component/Applayout'
import Headers from './Component/Header'
import Home from './Component/Home'
import Footers from './Component/Footer'
import About from './Component/About'
import React from 'react'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
   const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
