var geocoderProvider = 'google';
var httpAdapter = 'https';
var extra = {
  apiKey: 'AIzaSyBZwvmWCD1oSek_N0oQVPMaTEFQ0_vaTtQ',
  formatter: null
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

module.exports = geocoder;