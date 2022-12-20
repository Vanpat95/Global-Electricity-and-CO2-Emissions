// Get the Roadster endpoint
const co2 = "Resources/co2_filtered.json";


// Fetch the JSON data and console log it
d3.json(co2).then(function(data) {
  console.log(data);
});

// Get the capsules endpoint
const electricity = "Resources/electricity_filtered.json";

// Fetch the JSON data and console log it
d3.json(electricity).then(function(data) {
  console.log(data);
});
