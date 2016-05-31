


function drawGraph() {


    var trace, data, layout;

   
    trace = {
        x: [0, 16000, 52500, 113000, 184500], 
        y: [0, 0, 920, 13330, 30490], 
        type: 'scatter', 
        mode: 'lines+markers',
        name: "trace" 
    };
        data = [trace];
    layout = {
        title: "Tax Payement Graph ",
        yaxis: {
            title: "Amount of tax payed ($)",
            zerolinewidth: 1.5 
        },
        xaxis: {
            title: "Income ($)",
            zerolinewidth: 1.5,
            
        }
    };
    lotly.newPlot("graph", data, layout);
}

drawGraph();