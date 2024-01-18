import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "",
    element: (
       <About/>

    ),
  },
]);

test('About Test', () => {
  render(<RouterProvider router={router}></RouterProvider>);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
