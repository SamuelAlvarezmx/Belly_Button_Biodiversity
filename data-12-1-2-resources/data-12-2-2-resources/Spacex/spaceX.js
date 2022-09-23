// creating the variables to log into spacex API

const url = 'https://api.spacexdata.com/v2/launchpads';

d3.json(url).then(receivedData => console.log(receivedData));
