import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Faq from './pages/FAQ';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: 'login', element: <Login /> },
  { path: 'home', element: <Home /> },
  { path: 'faq', element: <Faq /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}