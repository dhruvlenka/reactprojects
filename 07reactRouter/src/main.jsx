import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { User } from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

//complex router
// const router = createBrowserRouter([
//   {
        //nesting
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//easy router, 1. by array, 2. by object - createRoutesFromElements()
const router = createBrowserRouter(
  //method: coming from react-router-dom
  createRoutesFromElements(
    //router is coming from react router-dom
    <Route path='/' element={<Layout />}>
      {/* nesting */}
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>   
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)

