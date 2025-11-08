import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Component/Layout.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Department from './Component/Department.jsx'
import Home from './Component/Home.jsx'



const router = createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[{
    path:"",
    element:<Home />,
  },{
    path:"about",
    element:<About />,
  },{
    path:"contact",
    element:<Contact />,
  },{
    path:"Department",
    element:<Department />
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
