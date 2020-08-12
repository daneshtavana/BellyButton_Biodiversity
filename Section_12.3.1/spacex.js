// Section 12.3.1 
const url = "https://api.spacexdata.com/v2/launchpads";

// Retrive all data
//d3.json(url).then(receivedData => console.log(receivedData));
// Retrieve first list
//d3.json(url).then(receivedData => console.log(receivedData[0]));
// Retreive lattitide
//d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude));

// Section 12.3.1

//Load a local samples JSON file
// print Hello to console
// d3.json("samples.json").then(function(data){console.log("hello");});

// Section 12.3.2

// Print the entire samples.json dataset to console
// step1: Run python -m http.server; 
// step2: Open a browser addess http://localhost:8000/
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => 
    person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Display the metadata of any individual (e.g. index [0]) from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});