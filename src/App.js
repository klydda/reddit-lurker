import './App.css';
import React, {useEffect } from 'react';
import Redirect from './components/Api/Redirect.js';
import Root from './components/root/Root.js';
import Feed from './components/Feed/Feed.js';
import { getToken } from './components/Api/authToken.js';

import { setRedirected, getRedirected, setCode, getCode, setAccessToken, getAccessToken } from './components/Api/apiSlice.js';

import { useSelector, useDispatch } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route index element={<Feed />} />
    <Route path='/r/:subreddit' element={<Feed />} />
  </Route>
));

function App() {
  const redirected = useSelector(getRedirected);
  const code = useSelector(getCode);
  const accessToken = useSelector(getAccessToken);
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const hasCode = urlParams.has('code');

  //Updates state of api.redirected and api.code if user has been redirected but it's not been saved to state yet
  useEffect(() => {
    if (hasCode && !code){
      const code = urlParams.get('code');
      dispatch(setRedirected(true));
      dispatch(setCode(code))
    }
  }, [hasCode, urlParams])

  //Get's token from reddit auth endpoint and saves to state
  useEffect(() => {
    if(code && !accessToken) {
      getToken(code, dispatch, setAccessToken);
    }
  }, [code, accessToken]);

  if(!redirected && !hasCode){
    return (
      <Redirect />
    );
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
