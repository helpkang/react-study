import React, { Suspense } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const About = React.lazy(() => import('./about/About'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </>
    ),
  },
  {
    path: "about",
    element:  <Suspense fallback={<div>Loading...</div>}>
    <About />
  </Suspense>,
  },
]);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
