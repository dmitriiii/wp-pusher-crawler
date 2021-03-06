var request = require('request');
var axios = require('axios');

axios.all([
  axios.get('https://web-hero.xyz/SYNC.json')
]).then(axios.spread((response1) => {
  loopp( response1.data, 'Sync Plugin' );
})).catch(error => {
  console.log(error);
});

function loopp( jsonn, ttype ){
	for (var i = 0; i < jsonn.length; i++) {
		k8Visit( jsonn[i].domain, jsonn[i].themeUrl, ttype );
	}
}

function k8Visit( domain, urll, type ){
	request(urll, function(error, response, body) {
	 if(error) {
		 console.log("Error with " + type + " on " + domain + ": " + error);
	 }
	 if(response.statusCode === 200) {
		 console.log( type + ' Successfully loaded on ' + domain + ' with 200 code' );
	 }
	});
}