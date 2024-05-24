
export function getBestPosts(accessToken, dispatch, setCards){
    const apiUrl = 'https://oauth.reddit.com/best.json';

    // Setup the headers you want to include in your request
    const headers = new Headers({
        'Authorization': `Bearer ${accessToken}`, // Example for an authorization header
        'Content-Type': 'application/json',               // Setting the content type
    });

    // Use the fetch API to make the GET request with headers
    fetch(apiUrl, {
        method: 'GET',    // Specify the method
        headers: headers  // Include headers in the request
    })
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();  // Convert the response body to JSON
    })
    .then(data => {
        const rawPosts = extractRawPosts(data);
        dispatch(setCards(rawPosts));
        // console.log(rawPosts);
        // console.log('Data received:', data);  // Handle the data from the response
    })
    .catch(error => {
        console.error('Fetch error:', error);  // Handle any errors that occur during the fetch
    });
}

function extractRawPosts(data){
    const originalArr = data.data.children;
    const cleanArr = [];
    originalArr.forEach(element => {
        cleanArr.push(element.data);
    });

    return cleanArr;
}