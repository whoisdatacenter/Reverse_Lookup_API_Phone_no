// Node.js
const https = require('https');

const apiKey = 'place_your_api_key_here';
const phoneNumber = '1234567890'; // Replace with the phone number you want to look up
const apiUrl = `https://api.whoisdatacenter.com/v1/search?apikey=${apiKey}&phone=${phoneNumber}`;

https.get(apiUrl, (response) => {
let data = '';

response.on('data', (chunk) => {
data += chunk;
});

response.on('end', () => {
const result = JSON.parse(data);
console.log(result);
});
}).on('error', (error) => {
console.error(`Error: ${error.message}`);
});
