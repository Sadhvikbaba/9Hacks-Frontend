import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserDashboard , OutPass , History , Login , SignUp , AdminApproval , AdminLogin} from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path : "/",
      element :<UserDashboard />
      },{
      path : "/history",
      element :<History />
      },{
      path : "/outpass",
      element :<OutPass />
      },{
        path : "/login",
        element : <Login/>
      },{
        path : "/signup",
        element : <SignUp/>
      },{
        path : "/pending-requests",
        element : <AdminApproval/>
      },
      {
        path : "/admin-login",
        element : <AdminLogin/>
      }
    ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
