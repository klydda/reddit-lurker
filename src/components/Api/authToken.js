export function getToken(redditCode, dispatch, setAccessToken){
    // Credentials
    const clientId = 'dpMGyBoZES2fxkCJcpG66A';
    const clientSecret = 'YnlG8oUNqUhiov3Tulgue_gLhdedFQ';
    const credentials = btoa(`${clientId}:${clientSecret}`);
  
    // The code received from Reddit's redirect
    const code = redditCode;
  
    // The exact redirect URI registered with the application
    const redirectUri = 'https://redditlurker.netlify.app';
  
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
  
        if(accessToken){
          dispatch(setAccessToken(accessToken));
        }
  
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
  }