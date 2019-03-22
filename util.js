const JSONbig = require('json-bigint');

class Util {

    static decimalToHexString(number) {
		if (number < 0)
		{
			number = 0xFFFFFFFF + number + 1;
		}
		return number.toString(16).toUpperCase();
	}
	static hexaToAscii(hex) {

        console.log("hex = "+hex);
        console.log("hex = "+hex[0]+hex[1]);
        console.log("hex = "+parseInt(hex[0]+hex[1],16));
	    var str = '';
	    for (var i = 0; i < hex.length; i += 1)
	        str += String.fromCharCode(parseInt(hex[i]));
	    return str;
	}

	static asciiToHexa(str) {
		var arr1 = [];
		for (var n = 0, l = str.length; n < l; n ++) {
			var hex = this.decimalToHexString(Number(str.charCodeAt(n)));
			arr1.push(hex);
		}
		return arr1.join('');
	}
    static decodeBase64(str) {
        let buff = new Buffer(str, 'base64');
        let text = buff.toString('ascii');

        return text;
    }
}

module.exports = Util;
