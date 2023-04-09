import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/shop/Shop';
import Home from './component/Layout/home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './component/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orderReview',
        element: <Orders></Orders>,
        loader: cartProductsLoader
        
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/manageInventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
