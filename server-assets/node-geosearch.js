var geocoderProvider = 'google';
var httpAdapter = 'https';
// optionnal 
var extra = {
  apiKey: 'AIzaSyBZwvmWCD1oSek_N0oQVPMaTEFQ0_vaTtQ', // for Mapquest, OpenCage, Google Premier 
  formatter: null // 'gpx', 'string', ... 
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

module.exports = geocoder;


// Using callback 
/*geocoder.geocode('29 champs elysée paris', function (err, res) {
  console.log(res);
});*/