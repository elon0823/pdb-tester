const request = require('request');
const JSONbig = require('json-bigint');
const {ABCI_URL} = require('./config')

class ABCIHandler {

	makeRequest(abciMethod, path, data) {

		let dataStr = JSONbig.stringify(JSONbig.parse(data));
		let options = {
			url: ABCI_URL,
			method: "post",
			body: JSON.stringify( {
				"method":`${abciMethod}`,
				"id":"jsonrpc-client",
				"jsonrpc":"2.0",
				"params": {
					"path": `${path}`,
					"data": this.asciiToHexa(dataStr)
				}
			})
		};
		return options
	}
	decimalToHexString(number) {
		if (number < 0)
		{
			number = 0xFFFFFFFF + number + 1;
		}
		return number.toString(16).toUpperCase();
	}

	asciiToHexa(str) {
		var arr1 = [];
		for (var n = 0, l = str.length; n < l; n ++) {
			var hex = this.decimalToHexString(Number(str.charCodeAt(n)));
			arr1.push(hex);
		}
		return arr1.join('');
	}

	sendData(method, path, data, callback) {
		request(this.makeRequest(method, path, data), (error, response, body) => {
			if (error) {
				callback({"error":true, "data":""})
				console.error('An error has occurred: ', error);
			} else {
				callback({"error":false, "data":body})
				console.log('Post successful: response: ', body);
			}
		});
	}
}

module.exports = ABCIHandler;
