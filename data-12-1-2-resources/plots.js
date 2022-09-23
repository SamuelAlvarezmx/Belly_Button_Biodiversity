// Line plot Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);

// Creating Bar charts

//var trace = {

//    x: ['burrito', 'pizza', 'chicken'],

//    y: [10,18,5],

//    type: 'bar'

//};

//var layout = {

//    title: 'Luncheon Survey',
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};


// Plotly.newPlot('plotArea', [trace], layout);

// Pie charts, changes the way we use the x and ys to labes and values
//var trace = {

//    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],

//    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],

//    type: 'pie'

//};

//var data = [trace]
//var layout = {

//    title: '"Pie" Chart',

//}

//Plotly.newPlot('plotArea', data, layout)

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'markers+lines',
    type: 'scatter'
  };

var data = [trace1, trace2, trace3]
Plotly.newPlot('plotArea', data)  