var config = require("../config");
var endpoint = "http://api.crunchbase.com/v/2/";
var keyParam = "user_key";
var qs = require("qs");

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
}

<<<<<<< HEAD
//Products
function getProductsUrl(params) {
  return endpoint
  + 'products?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
=======
function getPeopleUrl(page){
  return endpoint
  + 'people?' 
  + keyParam + '=' + config.apikey;
  + "&" + "=" + qs.stringify(page)
}

function getPersonUrl(permalink){
  return endpoint
  + 'person/' 
  + permalink
  + "?"
  + keyParam + '=' + config.apikey
}
function getOrganizationUrl(permalink) {
  return endpoint
  + 'organization/' + permalink + '?' + keyParam + '=' + config.apikey;
>>>>>>> ea9be6af13c5246284ca531f21919f66284eca9e
}

module.exports = {
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
<<<<<<< HEAD
  getProductsUrl: function(params) {
    return getProductsUrl(params);
=======

  getPeopleUrl: function(page) {
    return getPeopleUrl(page);
  },

  getPersonUrl: function(permalink) {
    return getPersonUrl(permalink);
  },
  getOrganizationUrl: function(permalink) {
    return getOrganizationUrl(permalink);
>>>>>>> ea9be6af13c5246284ca531f21919f66284eca9e
  }

}
