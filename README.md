# Node.js wrapper for CrunchBase API V2

## Examples

```javascript
var crunchbase = require('crunchbase2');

// Init the object with your API key
crunchbase.init(apikey);

// Lookup all organizations with keyword "airbnb"
//Accepts title search query
crunchbase.organizations( { query: "airbnb" } , function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

// Lookup a single organization with the permalink "airbnb"
//accepts permalink (airbnb's happens to be airbnb)
crunchbase.organization( {query: "airbnb" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get pages of people
//accepts page number
crunchbase.people( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get a single person
//accepts user permalink
crunchbase.person( {query: "richard-czechowski" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get pages of products
//accepts a page number
crunchbase.products( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get a single product
//accepts a permalink
crunchbase.product( {query: "airbnb" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get funding round for a specific product. A uuid can be gotten from product endpoint
//accepts a uuid
crunchbase.fundingRound( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the Acquisition.
//accepts a uuid
crunchbase.acquisition( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the IPO.
//accepts a uuid
crunchbase.ipo( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the Fund Raise.
//accepts a uuid
crunchbase.fundRaise( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//Returns a paginated list of all active Locations in CrunchBase.
//accepts a page
crunchbase.locations( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//Returns a paginated list of all active Categories in CrunchBase.
//accepts a page
crunchbase.categories( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});
```
