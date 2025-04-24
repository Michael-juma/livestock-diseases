import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Explore from './Components/Explore';
import Dashboard from './Pages/Dashboard';
import DiseaseSearch from './Components/DiseaseSearch';
import DiseaseCollection from './Components/DiseaseCollection';
import DiseaseForm from './Components/DiseaseForm';
import Video from './Components/Video';
import DiseaseDetails from './Components/DiseaseDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wraps common layout (e.g. NavBar)
    children: [
      {
        index: true,
        element: (
          <>
            <Dashboard />
            <DiseaseSearch />
            <DiseaseCollection />
            <DiseaseForm />
            <Video />
          </>
        ),
      },
      {
        path: "disease/:id",
        element: <DiseaseDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "explore",
        element: <Explore />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
