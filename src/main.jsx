import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "../src/componetents/user/home/Home.jsx"
import Contact from "../src/componetents/user/contact/Contact.jsx"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './componetents/user/about/About.jsx'
import MyAccount from './componetents/user/myaccount/MyAccount.jsx'
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='about/contact' element={<Contact/>}/>
    <Route path="/my-account" element={<MyAccount/>}/>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)
