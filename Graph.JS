

function simpleInterest(principle, rate, time) {
    return principle * rate * time;
}
function drawGraph() {


    var trace, data, layout;

   
    trace = {
        x: [0, 16000, 52500, 113000, 184500, 5], 
        y: [0, 12, 24, 26, 18, 10], 
        type: 'scatter', 
        mode: 'lines+markers',
        name: "trace" // a name for the data to appear on the legend (if present)
    };
        data = [trace];
    layout = {
        title: "A simple graph in Plotly",
        yaxis: {
            title: "y-axis",
            zerolinewidth: 1.5 
        },
        xaxis: {
            title: "x-axis",
            zerolinewidth: 1.5,
            
        }
    };
    lotly.newPlot("graph", data, layout);
}

drawGraph();