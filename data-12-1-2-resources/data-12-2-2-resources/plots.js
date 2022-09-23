// sort the cities for the most populated ones

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City)

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));


// create my bar chart

var trace = {

    x: topFiveCityNames,

    y: topFiveCityGrowths,

    type: 'bar'
};

var data = [trace]

var layout = {

    title: 'Most Rapidly Growing Cities',

    xaxis: {title: 'City'},

    yaxis: {title: 'Population Growth, 2016-2017'}
};

//Plotly.newPlot('bar-plot', data, layout);

// sort the cities for the most populated ones

var sortedPopulation = cityGrowths.sort((a,b) => a.population - b.population).reverse();

var topSevenCities = sortedPopulation.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City)

var topSevenCityPopulations = topSevenCities.map(city => parseInt(city.population));

var trace1 = {

    x: topSevenCityNames,

    y: topSevenCityPopulations,

    type: 'bar'
};

var data1 = [trace1]

var layout = {

    title: 'Most Populated Cities',

    xaxis: {title: 'City'},

    yaxis: {title: 'Population'}
};

Plotly.newPlot('bar-plot', data1, layout);

