import './App.css';
import React, {useEffect } from 'react';
import Auth from './components/Api/Auth.js';
import Redirect from './components/Api/Redirect.js';
import Root from './components/root/Root.js';
import Feed from './components/Feed/Feed.js';

import { setRedirected, getRedirected } from './components/Api/apiSlice.js';

import { useSelector, useDispatch } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route index element={<Feed />} />
    <Route path='r/:subreddit' element={<Feed />} />
  </Route>
));

function App() {
  const redirected = useSelector(getRedirected);
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const hasCode = urlParams.has('code');

  console.log(`Redirected: ${redirected}`);

  if(!redirected && !hasCode){
    return (
      <Redirect />
    );
  }

  if(hasCode){
    dispatch(setRedirected(true));
    <Auth />
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
