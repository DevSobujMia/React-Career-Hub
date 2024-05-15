import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Appliedjobs from './Components/Applied-jobs/Appliedjobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import Root from './Components/Root/Root';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
