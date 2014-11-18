var config = require("../config");
var endpoint = "http://api.crunchbase.com/v/2/";
var keyParam = "user_key";
var qs = require("qs");

function getProductUrl(permalink) {
  return endpoint
  + 'product/' + permalink + '?' 
  + keyParam + '=' + config.apikey
}

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
}

module.exports = {
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getProductUrl: function(permalink) {
    return getProductUrl(permalink);
  }
}
