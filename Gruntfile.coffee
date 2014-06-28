
developmentMode = true

module.exports = (grunt) ->
	#for dep in ['grunt-contrib-watch', 'grunt-contrib-connect']
	#	grunt.loadNpmTasks dep

	require('matchdep').filterDev('grunt-*').forEach (x) -> 
		grunt.loadNpmTasks x

	grunt.initConfig
		karma:
			unit:
				configFile: 'karma.conf.js'
				background: true

		jasmine:
			test:
				src: 'build/**/*.js'
				options:
					specs: 'test/spec/*.coffee'
					#helpers: 'spec/*Helper.js'

		express:
			all:
				options: 
					port: 34729
					debug: true
					hostname: "0.0.0.0"
					bases: ['dest', 'dest/angular']
		coffee:
			compile:
				options:
					sourceMap: true
					linenos: true
					#compress: true
				files: [{
					expand: true,
					cwd: 'site/',
					src: ['*.coffee'],
					dest: 'dest/',
					ext:'.js'
				}]
					#'dest/lisp2html.js': ['site/*.coffee']
		jade:
			compile:
				options:
					devmode: developmentMode
					timestamp: "<%= grunt.template.today() %>"
				files: [{
					expand: true,
					cwd: 'site/',
					src: ['*.jade'],
					dest: 'dest/',
					ext:'.html'
				}]
		stylus:
			compile:
				options:
					data: {}
				files: [{
						expand: true,
						cwd: 'site/'
						src: ['*.stylus'],
						dest: 'dest/',
						ext:'.css'
					}]
					#'dest/lisp.css': ['site/*.stylus']
		watch:
			#all:
			#	options:
			#		livereload: true
			# 	files: "site/*.*"
			pkg: grunt.file.readJSON('package.json')
			#css:
				#options:
				#	livereload: true
			#	files: ['dest/*.css']
			#js:
				#options:
				#	livereload: true
			#	files: ['dest/*.js']
			#pages:
				#options:
				#	livereload: true
			#	files: ['dest/*.html']
			karma:
				files: ['test/*.coffee']
				tasks: ['karma:unit']
			coffee:
				files: ['site/*.coffee', 'Gruntfile.coffee']
				tasks: ['coffee']
			jade:
				#options:
				#	livereload: true
				files: ['site/*.jade']
				tasks: ['jade']
			stylus:
				#options:
				#	livereload: true				
				files: ['site/*.stylus']
				tasks: ['stylus']
			livereload:
				options: {livereload: true}
				files: ['dest/**/*']
		open:
			all:
				path: 'http://localhost:<%= express.all.options.port%>/index.html'
		uglify:
			build:
				files: 
					'ugly.js': ['site/*.js']

	grunt.registerTask 'default', ['watch']	
	grunt.registerTask 'test', ['karma:unit']
	grunt.registerTask 'server', ['express', 'open', 'jade', 'coffee', 'karma:unit', 'stylus', 'watch']