#'use strict'


#angular = require('./angular.js')
#module.exports = tohtml = angular.module('tohtml', [])

tohtml = angular.module('tohtml', [])
###
	console.log tokenize '(lol (a b)) ; (a b c)\n (a)'
	# ['(', lol', '(', 'a', 'b', ')', ')', '(', 'a', ')']
###
sample = '(lol (ba) ; ((comment (comnet))) \n(a))'
removeComments = (inp) ->
	inp.replace(/(\;[^\n]*\n)/g, '')

tokenize = (inp) ->
	inp1 = removeComments(inp)
	inp2 = inp1.split("\"").map((v, i) ->
		if i % 2 is 0
			v.replace /([\{\(\[\]\)\}\n])/g, " $1 "
		else
			v.replace RegExp(" ", "g"), "!w!"
	).join("\"").trim()
	 .split(/\ +/).map((v) -> v.replace /!w!/g, " ")
	inp2

tohtml.constant 'tokenize', tokenize		

#console.log tokenize '(lol (a b) ; (a b c)\n (a)'

tohtml.constant 'tohtml', (s) ->	
	#var closetag = false;
	htmloutput = []
	open = "([{"
	closed = ")]}"
	brackets = open + closed
	tok = tokenize(s)
	tagstack = []
	#console.log tok
	level = 0
	nlevels = 16
	# mark local varibales different from global variables
	htmlwrite = (s) ->
		htmloutput.push s

	called = true
	for i of tok
		c = tok[i][0]
		#debugger
		if c is "\n"
			htmlwrite "<br>"
			for d in tagstack
				#d = tagstack[i]
				htmloutput[d] = htmloutput[d].replace("<span", "<div")
		else if _.contains brackets, c
			if _.contains open, c
				level++
				tagstack.push htmloutput.length
				htmlwrite "<span class='layer#{level%nlevels}'>"
				#htmlwrite "<b>"
				called = true
			else if _.contains closed, c
				level--
				txt = htmloutput[tagstack.pop()].replace(/<([A-z]+)[^>]*>/, "</$1>")
				htmlwrite txt
		
		#var col = colors[level%colors.length];
		else
			if called
				htmlwrite tok[i] + "</b>"
				called = not called
			else if tok[i][0] is "\""
				htmlwrite "<span class=\"string\">" + tok[i] + "</span>"
			else unless isNaN(tok[i])
				htmlwrite "<span class=\"number\">" + tok[i] + "</span>"
			else
				htmlwrite tok[i]
	return "<div class=''>"+htmloutput.join " "+'</div>'