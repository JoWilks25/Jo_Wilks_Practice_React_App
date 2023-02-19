import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Root from './routes/Root';
import RootPro from './routes/pro/RootPro';
import MainFun from './routes/MainFun';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // CoverPage
  },
  {
    path: "/professional",
    element: <RootPro />, // Main Page Professional Version
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
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);