
export function getPosts(accessToken, dispatch, oldAfter, oldCount, setCards, addCards, name, first){
    const params = `?after=${oldAfter}&count=${oldCount}`;
    const urlBase = `https://oauth.reddit.com/r/${name}/hot.json`;
    const apiUrl = first ? urlBase : `${urlBase}${params}`;

    console.log('TO FETCH FROM: ' + apiUrl);

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
        const after = data.data.after;
        const count = rawPosts.length;
        
        const dispatchObject = {
            name: name,
            posts: rawPosts,
            after: after,
            count, count
        }
        if (first){
            console.log('First triggered in api');
            dispatch(setCards(dispatchObject));
        } else {
            dispatch(addCards(dispatchObject));
        }

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