var config = require("../config");
var endpoint = "http://api.crunchbase.com/v/2/";
var keyParam = "user_key";
var qs = require("qs");

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
}

//Products
function getProductsUrl(params) {
  return endpoint
  + 'products?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
}

module.exports = {
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getProductsUrl: function(params) {
    return getProductsUrl(params);
  }

}
