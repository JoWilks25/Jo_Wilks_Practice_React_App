import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import MainPro from './routes/MainPro';
import MainFun from './routes/MainFun';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // CoverPage
  },
  {
    path: "/professional",
    element: <MainPro />, // Main Page Professional Version
  },
  {
    path: "/fun",
    element: <MainFun />, // Main Page Fun Version
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);