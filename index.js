/* Copyright 2014 CodingHouse Winter Cohort
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

request = require('request'),
urlHelper = require('./util/url_helper');

var redisClient;
var cacheTimeout;
var apiKey;

function init(apikey, cache) {
  if (cache) {
    cacheTimeout = cache.timeout || 86400;
    redisClient = require("redis").createClient(cache);
  }
  apiKey = apikey;
  urlHelper.init(apikey);
}

function getOrganizations(params, callback) {
  var url = urlHelper.getOrganizationsUrl(params);
  createRequest(url, callback);
}

function getOrganization(permalink, callback) {
  var url = urlHelper.getOrganizationUrl(permalink);
  createRequest(url, callback);
}

function getPeople(page, callback){
  var url = urlHelper.getPeopleUrl(page);
  createRequest(url, callback);
}

function getPerson(permalink, callback){
  var url = urlHelper.getPersonUrl(permalink);
  createRequest(url, callback);
}

function getProducts(params, callback) {
  var url = urlHelper.getProductsUrl(params);
  createRequest(url, callback);
}

function getProduct(permalink, callback) {
  var url = urlHelper.getProductUrl(permalink);
  createRequest(url, callback);
}

function getFundingRound(uuid, callback) {
  var url = urlHelper.getFundingRoundUrl(uuid);
  createRequest(url, callback);
}

function getAcquisition(uuid, callback) {
  var url = urlHelper.getAcquisitionUrl(uuid);
  createRequest(url, callback);
}

function getIPO(uuid, callback) {
  var url = urlHelper.getIPOUrl(uuid);
  createRequest(url, callback);
}

function getFundRaise(uuid, callback) {
  var url = urlHelper.getFundRaiseUrl(uuid);
  createRequest(url, callback);
}

function getLocations(params, callback) {
  var url = urlHelper.getLocationsUrl(params);
  createRequest(url, callback);
}

function getCatagories(params, callback) {
  var url = urlHelper.getCatagoriesUrl(params);
  createRequest(url, callback);
}

function createRequest(url, callback) {
  if (redisClient) {
    var cleanedUrl = url.replace('?user_key=' + apiKey + '&','?');
    redisClient.get(cleanedUrl, function(err, obj) {
      if (err || obj === null) {
        return request(url, function (error, response, body) {
          if (!err) {
            redisClient.set(cleanedUrl, JSON.stringify(JSON.parse(body)));
            redisClient.expire(cleanedUrl, cacheTimeout);
          }
          callback(error, JSON.parse(body));
        });
      }
      callback(err, JSON.parse(obj));
    })
  } else {
    request(url, function (error, response, body) {
      try {
        callback(error, JSON.parse(body));
      } catch (error) {
        callback(error, body);
      }
    });
  }
}

module.exports = {
  init: function(apikey, cache) {
    return init(apikey, cache);
  },
  organizations: function(params, callback) {
    return getOrganizations(params, callback);
  },
  organization: function(permalink, callback) {
    return getOrganization(permalink, callback);
  },
  people: function(page, callback) {
    return getPeople(page, callback);
  },
  person: function(permalink, callback) {
    return getPerson(permalink, callback);
  },
  products: function(params, callback) {
    return getProducts(params, callback);
  },
  product: function(permalink, callback) {
    return getProduct(permalink, callback);
  },
  fundingRound: function(uuid) {
    return getFundingRound(uuid, callback);
  },
  acquisition: function(uuid) {
    return getAcquisition(uuid, callback);
  },
  ipo: function(uuid) {
    return getIPOUrl(uuid, callback);
  },
  fundRaise: function(uuid) {
    return getFundRaiseUrl(uuid, callback);
  },
  locations: function(params, callback) {
    return getLocations(params, callback);
  },
  catagories: function(params, callback) {
    return getCatagories(params, callback);
  },
  categories: function(params, callback) {
    return getCategories(params, callback);
  }
}
