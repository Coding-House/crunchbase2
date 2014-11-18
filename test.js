var crunchbase = require('./index');

// Init the object with your API key
crunchbase.init("3fda5b18c2702ff14202782b05067297");

// Lookup all organizations with keyword "airbnb"
crunchbase.organizations( { query: "airbnb" } , function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

crunchbase.people( { page: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

crunchbase.person( "nicholas-james-2" , function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

