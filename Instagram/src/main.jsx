import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter,RouterProvider} from 'react-router'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import ViewStory from './ViewStory.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element :<App/>
  },
  {
    path:"/viewstory/:id/:tot",
    element : <ViewStory/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
