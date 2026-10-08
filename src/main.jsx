import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Produtos from './Produtos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/produtos",
    element: <Produtos/>
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
