# crunchbase2: wrapper around CrunchBase API

## Examples

```javascript
var crunchbase = require('crunchbase2');

// Init the object with your API key
crunchbase.init(apikey);

// Lookup all organizations with keyword "airbnb"
crunchbase.organizations( { query: "airbnb" } , function(error, results) {
 if (!error) {
    console.log(results) // Print the search results
  }
});
```
