const https = require('https');

const url =
  'https://api.darksky.net/forecast/ab909e938a8ef73e0a294061c91bc734/40,-75';

const request = https.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
