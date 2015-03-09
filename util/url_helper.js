var qs = require('qs');

var endpoint = 'http://api.crunchbase.com/v/2/';
var keyParam, config = {};

function init(apikey) {
  config.apikey = apikey;
  keyParam = '?user_key=' + config.apikey;
}

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

function getFundingRoundUrl(uuid) {
  return endpoint
  + 'funding-round/' + uuid + keyParam;
}

function getAcquisitionUrl(uuid) {
  return endpoint
  + 'acquisition/' + uuid + keyParam;
}

function getIPOUrl(uuid) {
  return endpoint
  + 'ipo/' + uuid + keyParam;
}

function getFundRaiseUrl(uuid) {
  return endpoint
  + 'fund-raise/' + uuid + keyParam;
}

function getLocationsUrl(params) {
  return endpoint
  + 'locations' + keyParam
  + '&' + qs.stringify(params);
}

function getCatagoriesUrl(params) {
  return endpoint
  + 'catagories' + keyParam
  + '&' + qs.stringify(params);
}

module.exports = {
  init: function(apikey) {
    return init(apikey);
  },
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
  },
  getFundingRoundUrl: function(uuid) {
    return getFundingRoundUrl(uuid);
  },
  getAcquisitionUrl: function(uuid) {
    return getAcquisitionUrl(uuid);
  },
  getIPOUrl: function(uuid) {
    return getIPOUrl(uuid);
  },
  getFundRaiseUrl: function(uuid) {
    return getFundRaiseUrl(uuid);
  },
  getLocationsUrl: function(params) {
    return getLocationsUrl(params);
  },
  getCatagoriesUrl: function(params) {
    return getCatagoriesUrl(params);
  }
}
