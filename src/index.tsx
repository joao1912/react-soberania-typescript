import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Game from './routes/Game';
import ConfigGame from './routes/ConfigGame';
import "./index.css"

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/configGame',
    element: <ConfigGame />
  },
  {
    path: '/soberania',
    element: <Game />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <RouterProvider router={Router}/>
  </React.StrictMode>
);

