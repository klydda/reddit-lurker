import './App.css';
import React from 'react';
import Root from './components/root/Root.js';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root />} >

  </Route>
));


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
