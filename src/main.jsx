import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout/MainLayout.jsx'
import Home from './components/SinglePages/Home/Home.jsx'
import Login from './components/Authentication/Login/Login.jsx'
import Register from './components/Authentication/Register/Register.jsx'
import NotFound from './components/ErrorElement/NotFound/NotFound.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Blog from './components/SinglePages/Blog/Blog.jsx'
import ChefDetails from './components/SinglePages/ChefDetails/ChefDetails.jsx'
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx'
import About from './components/SinglePages/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-hunter-server-side-iamwahidanik.vercel.app/chefs')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'chef/:id',
        element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side-iamwahidanik.vercel.app/chefs/${params.id}`)
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
