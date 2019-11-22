var request = require('request');
// var cheerio = require('cheerio');
var URL = require('url-parse');
var THEMES = require('./THEMES.json');
var SYNC = require('./SYNC.json');


for (var i = 0; i < THEMES.length; i++) {
	k8Visit( THEMES[i].domain, THEMES[i].themeUrl, 'Theme' );
}


for (var i = 0; i < SYNC.length; i++) {
	k8Visit( SYNC[i].domain, SYNC[i].themeUrl, 'Sync Plugin' );
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