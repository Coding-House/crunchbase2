var config = require('../config');
var qs = require('qs');

var endpoint = 'http://api.crunchbase.com/v/2/';
var keyParam = '?user_key=' + config.apikey;

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations' + keyParam
  + '&' + qs.stringify(params);
}

function getOrganizationUrl(permalink) {
  return endpoint
  + 'organization/' + permalink + keyParam;
}

function getPeopleUrl(page){
  return endpoint
  + 'people' + keyParam
  + '&' + qs.stringify(page);
}

function getPersonUrl(permalink){
  return endpoint
  + 'person/' + permalink + keyParam;
}

function getProductsUrl(params) {
  return endpoint
  + 'products' + keyParam
  + '&' + qs.stringify(params);
}

function getProductUrl(permalink) {
  return endpoint
  + 'product/' + permalink + keyParam;
}

module.exports = {
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getOrganizationUrl: function(permalink) {
    return getOrganizationUrl(permalink);
  },
  getPeopleUrl: function(page) {
    return getPeopleUrl(page);
  },
  getPersonUrl: function(permalink) {
    return getPersonUrl(permalink);
  },
  getProductsUrl: function(params) {
    return getProductsUrl(params);
  },
  getProductUrl: function(permalink) {
    return getProductUrl(permalink);
  }
}
