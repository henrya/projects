 /**
 *
 * jsencode.js
 *
 * @description. Encodes/decodes the string with bitwise XOR 
 * @version 1.0 
 * @copyright 2014 Henry ALgus. All rights reserved.
 *
 */

var jsEncode = {
	encode: function (s, k) {
		var enc = "";
		var str = "";
		// make sure that input is string
		str = s.toString();
		for (var i = 0; i < s.length; i++) {
			// create block
			var a = s.charCodeAt(i);
			// bitwise XOR
			var b = a ^ k;
			enc = enc + String.fromCharCode(b);
		}
		return enc;
	}
};