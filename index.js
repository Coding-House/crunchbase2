// Copyright 2014 CodingHouse Winter Cohort

var config = require('./config'),
request = require('request'),
urlHelper = require('./util/url_helper');

function init(apikey) {
  config.apikey = apikey;
}

function getOrganizations(params, callback) {
  var url = urlHelper.getOrganizationsUrl(params);
  createRequest(url, callback);
}

function getProduct(permalink, callback) {
  var url = urlHelper.getProductUrl(permalink);
  createRequest(url, callback);
}
function createRequest(url, callback) {
  request(url, function (error, response, body) {
    try {
      callback(error, JSON.parse(body));
    } catch (error) {
      callback(error, body);
    }
  });
}
module.exports = {
  init: function(apikey) {
    return init(apikey);
  },

  organizations: function(params, callback) {
    return getOrganizations(params, callback);
  },
  product: function(permalink, callback) {
  return getProduct(permalink, callback);
 }
}

