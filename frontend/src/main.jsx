import React from "react";
import ReactDOM from "react-dom/client";

//Redux -> Create and control of a store for usestate and others
import store from './Store.js';
import { Provider } from 'react-redux';

//React-Router -> Navigate between pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import User from "./pages/User/User.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"



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
    element: <PrivateRoute  element={<User />} />,
  },
  { 
    path: "/*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);