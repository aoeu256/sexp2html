

window.stream = require('stream')

window.cljtokenize = require("cljs-tokenizer")

window.logTokens = (function (src, token) {
  console.log(token.type + " => " + JSON.stringify(src))
})

makeStringStream = function(s) {
	var readS = new stream.Readable()
	readS._read = function(size) {
		readS.push(s)
		readS.push(null)
	}
	return readS
}

var test = (function() {
	$(document).ready(function() {
		var t = cljtokenize(logTokens)
		var g = $.get('test.clj', function(data) {
			t.write(data);
		})
	})
})()