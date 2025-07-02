const axios = require('axios');

const api_key = '684dc19240c520e08841a602';
const url = 'https://api.ecommerceapi.io/google_shopping/';

const params = {
    api_key: api_key,
    q: 'electronics',

    gl: 'in'
};

axios
    .get(url, { params: params })
    .then(function (response) {
        if (response.status === 200) {
            const data = response.data;
            console.log(data);
        } else {
            console.log('Request failed with status code: ' + response.status);
        }
    })
    .catch(function (error) {
        console.error('Error making the request: ' + error.message);
    });