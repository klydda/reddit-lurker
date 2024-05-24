import './App.css';
import React, {useEffect } from 'react';
import Redirect from './components/Api/Redirect.js';
import Root from './components/root/Root.js';
import Feed from './components/Feed/Feed.js';

import { setRedirected, getRedirected, setCode, getCode, setAccessToken, getAccessToken } from './components/Api/apiSlice.js';

import { useSelector, useDispatch } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route index element={<Feed />} />
    <Route path='r/:subreddit' element={<Feed />} />
  </Route>
));

function getToken(redditCode, dispatch){
  // Your credentials
  const clientId = 'dpMGyBoZES2fxkCJcpG66A';
  const clientSecret = 'YnlG8oUNqUhiov3Tulgue_gLhdedFQ';
  const credentials = btoa(`${clientId}:${clientSecret}`);

  // The code you received from Reddit's redirect
  const code = redditCode;

  // The exact redirect URI registered with your application
  const redirectUri = 'http://localhost:3000/';

  // URL for the POST request
  const url = 'https://www.reddit.com/api/v1/access_token';

  // Data to be sent in the request body
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri
  };

  // Convert the data object to URL-encoded string
  const formData = new URLSearchParams(data).toString();

  // Fetch options
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`
    },
    body: formData
  };

  // Making the POST request
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const accessToken = data.access_token;
      console.log('Fetch ACT: ' + accessToken);

      if(accessToken){
        dispatch(setAccessToken(accessToken));
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });

}

function App() {
  const redirected = useSelector(getRedirected);
  const code = useSelector(getCode);
  const accessToken = useSelector(getAccessToken);
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const hasCode = urlParams.has('code');

  console.log(`Redirected: ${redirected}`);
  console.log('Code: ' + code);
  console.log('AccessToken: ' + accessToken);

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
      getToken(code, dispatch);
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
