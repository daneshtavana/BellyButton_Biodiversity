// Section 12.4.3 
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

// When an option is selected from the menu, 
// its value is printed to the browser console
function optionChanged(newSample) {
  console.log(newSample);
}

// Print information to the Demographic Info panel: 
// once a user selects an ID number, the associated 
// volunteer’s demographic information needs to be 
// filtered from samples.json and placed in the panel
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}

init();