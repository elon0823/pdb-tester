const request = require('request');
const JSONbig = require('json-bigint');
const {ABCI_URL} = require('./config');
const Util = require('./util');

class ABCIHandler {

	constructor() {

	}
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
					"data": Util.asciiToHexa(dataStr)
				}
			})
		};
		return options
	}

	sendData(method, path, data, result, callback) {
		request(this.makeRequest(method, path, data), (error, response, body) => {
			if (error) {
				callback({"error":true, "data":""})
				console.error('An error has occurred: ', error);
			} else {
				let data = JSONbig.parse(body);
				try {
					let value = Util.decodeBase64(data.result.response.value);

					let res = {"error":false, "data":JSONbig.parse(value)};
					result.error = false;
					result.data = JSONbig.parse(value);
					
					if(callback != null) {
						callback(res);
					}
					else {
						console.log(res);
					}
				}
				catch(e) {

					let res = {"error":true, "data":e};
					result.error = true;
					result.data = e;

					if(callback != null) {
						callback(res)
					}
					else {
						console.log(res);
					}
					
				}

				//console.log('Post successful: response: ', body);
			}
		});
	}
}

module.exports = ABCIHandler;
