import React from "react";
import ReactDOM from "react-dom/client";
//import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import User from "./pages/User/User.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

//import store from './Store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

//<Provider store={store}></Provider>