import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Auth/Login.jsx'

import Register from './Components/Auth/Register.jsx'
import Classes from './Components/Classes/Classes.jsx'
import AddClass from './Components/AddClass/AddClass.jsx'

import MyFavouriteClass from './Components/FavouriteClass/MyFavouriteClass.jsx'
import Services from './Components/Services/Services.jsx'
import { SearchProvider } from './Components/SearchProvider/SearchProvider.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: 'classes',
        element : <Classes/>
      },
      {
        path: 'add-class',
        element:<AddClass/>
      },
      {
        path:'mfclass',
        element: <MyFavouriteClass/>
      },
      {
      path: 'servicess',
      element: <Services/>
      }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SearchProvider>
    <RouterProvider router={routes}>

    </RouterProvider>
    </SearchProvider>
  </StrictMode>,
)
