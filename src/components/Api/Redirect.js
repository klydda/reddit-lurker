import React from 'react';

const clientId = 'dpMGyBoZES2fxkCJcpG66A';
const responseType = 'code';
const state = 'state';
const redirectUri = 'http://localhost:3000/';
const scope = 'read';
const url = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=${responseType}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;

function Redirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const hasCode = urlParams.has('code');

    console.log('urlParams: ' + urlParams);
    console.log('hasCode: ' + hasCode);

    if (!hasCode){
        window.location = url;
    }
}

export default Redirect;