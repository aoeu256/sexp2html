# tests = []
# for file of window.__karma__.files
# 	tests.push file	if /Spec\.js$/.test(file)	if window.__karma__.files.hasOwnProperty(file)

# requirejs.config	 
# 	baseUrl: "/base/.." # Karma serves files from '/base'
# 	paths:['bower_components', 'build']
# 	shim:
# 		underscore:
# 			exports: "_"
	
# 	# ask Require.js to load these files (all our tests)
# 	deps: tests
	
# 	# start test run, once Require.js is done
# 	callback: window.__karma__.start

# console.log tests