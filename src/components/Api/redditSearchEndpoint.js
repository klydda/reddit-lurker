export function getSubredditNames(accessToken, search){
    const params = 'include_over_18=true&include_profiles=false';
    const query = search
    const baseUrl = `https://oauth.reddit.com/api/subreddit_autocomplete?query=${search}&${params}`;
    const apiUrl = baseUrl + params;

    console.log('FETCH SUB: ' + apiUrl);

    // Setup the headers you want to include in your request
    const headers = new Headers({
        'Authorization': `Bearer ${accessToken}`, // Example for an authorization header
        'Content-Type': 'application/json',               // Setting the content type
    });

    fetch(apiUrl, {
        method: 'GET',
        headers: headers
    }).then(response => {
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.error('Fetch error: ',  error);
    })
}
