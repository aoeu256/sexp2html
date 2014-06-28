// Util
var gulp =require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var connect = require('gulp-connect-multi');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
//var jasmine = require('gulp-jasmine');
//var mocha = require('gulp-mocha');

// Plugins
var stylus = require('gulp-stylus');
//var browserify = require('gulp-browserify');
var jade = require('gulp-jade');
//var imagemin = require('gulp-imagemin');
//var annotate = require('gulp-ng-annotate')
var coffee = require('gulp-coffee')
//var streamify = require('gulp-streamify')
//var source = require('vinyl-source-stream')

var p = {
	stylus: {
		src:'public/main.stylus',
		dest:'build/'
	},
	scripts: {
		src: 'public/*.coffee',
		dest: 'build/'
	},
	jade: {
		src: 'public/*.jade',
		dest: 'build/' 
	},
	test: {
		src:'build/test/*'
	}
}
/*
var karma = require('karma').server
var karmaConf = {
		//autoWatch: true,
		//basePath: '/',
		preprocessors: {
			'** /*.coffee': ['coffee']
		},
		coffeePreprocessor: {
			transformPath: function(path) { return path.replace(/\.coffee$/, '.js') }
		},		
		frameworks: ['jasmine'], // (jasmine/mocha/qunit/...)
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-cookies/angular-cookies.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-touch/angular-touch.js',
			//'bower_components/browserify/browserify.js',
			'public/*.coffee',
			'test/mock/** /*.coffee',
			'test/spec/** /*.coffee'
		],
		//exclude: [],
		port: 8080,
		browsers: ['Chrome'],
		plugins: [
			//'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-coffee-preprocessor',
			'karma-chrome-launcher'
		]
		//singleRun: false,
		//colors: true,
		// Uncomment the following lines if you are using grunt's server to run the tests
		// proxies: {
		//   '/': 'http://localhost:9000/'
		// },
		// URL root prevent conflicts with the site root
		// urlRoot: '_karma_'
	};
*/
var log = function(s) { process.stdout.write(s+'\n') }

gulp.task('test', function (done) {
	//gulp.src('build/test/**.*.')
	//  .pipe(mocha({compiler: ''}))
	// return gulp.src(['test/spec/*.coffee', 'test/mock/*.coffee'])
		// .pipe(karma({
			// configFile: 'test/karma.conf.js',
			// action: 'run'
		// }))
		// .on('error', function(err) {
			// throw err;
		// });
	//karma.start(karmaConf, done);
	
	// 		browsers: ['Chrome'], 
	// 		files: , 
	// 		frameworks: ['jasmine'], 
	// 		singleRun: true 
	// 	}, function (exitCode) { 
	// 		log('Karma has exited with ' + exitCode)
	// 		process.exit(exitCode)
	// })
})

// Livereload
var devserver = connect()
//devserver.static('bower_components')
gulp.task('connect',  devserver.server({
		root:['build'],
		livereload: true,
		open: {
			browser: 'C:\\Users\\aoeu\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
			//appName: 'C:\\Users\\aoeu\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
			//target:'http://localhost:35729'
		},
		port: 8000
	}))

// Compass
gulp.task('stylus', function() {
	gulp.src(p.stylus.src)
		.pipe(stylus({
			css: 'build/',
			sass: 'public/', 
			require: ['breakpoint', 'modular-scale']
		}))
		.on('error', function(err) {
			console.log(err) // plumber was not very good with compass
		})
		.pipe(minifyCss())
		.pipe(gulp.dest(p.stylus.dest))
		.pipe(devserver.reload())
}) 

var sourcemaps = require('gulp-sourcemaps');
gulp.task('coffee', function() {
	gulp.src(p.scripts.src)
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(coffee())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(p.scripts.dest))	
	.pipe(devserver.reload())
//	.pipe()
})

//var watching = false
//gulp.task('enable-watch-mode', function() { watching = true })

// Coffee

//watchify = require('watchify')
var browserify = null;
gulp.task('browserify', function() {
 	if(browserify === null)
 		browserify = require('gulp-browserify')

 	gulp.src('build/rmain.js', {read: false})
 		.pipe(plumber())
 		.pipe(browserify({
 		//	insertGlobals: true,
 		//	transform: ['coffeeify'],
 		//	extension: ['.coffee'],
            debug : true
 		}))
 		//.pipe(uglify()) streamify?
 		.pipe(rename('bundle.js'))
 		.pipe(gulp.dest('./build'))
 		.pipe(devserver.reload())
 })

// Jade
gulp.task('jade', function() {
	gulp.src(p.jade.src)
		.pipe(plumber())
		.pipe(jade())
		.pipe(gulp.dest(p.jade.dest))
		.pipe(devserver.reload())
})

// Images
gulp.task('images', function() {
	gulp.src('public/images/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('build/public/images/'))
		.pipe(devserver.reload())
})

//gulp.task('watchify', ['browserify'])

// Watch
gulp.task('watch', function() {
	// var bundler = plumber().pipe(watchify({
	// 		entries: './bmain.coffee',
	// 		basedir: 'public',
	// 		transform: ['coffeeify'],
	// 		extensions: ['.coffee'],
	// 		debug: true
	// 	})).transform('coffeeify')
	// var rebundle = function() {
	// 	return plumber()
	// 		   .pipe(bundler.bundle())
	//  	       .pipe(source('bmain.js'))
	//  	       .pipe(gulp.dest('./build'))
	//  	       .pipe(devserver.reload());
	// };
	// bundler.on('update', rebundle);
	// rebundle()
	//gulp.watch('public/sass/**/*.scss', ['compass']);
	gulp.watch('public/**/*.stylus', ['stylus']);
	gulp.watch('public/**/*.jade', ['jade']);
	gulp.watch('public/**/*.coffee', ['coffee']);
	gulp.watch('build/rmain.js', ['browserify'])
	//watchify('./public/js/app.js')
	//gulp.watch('public/images/**',['images']);
})

// Go
gulp.task('default', ['connect','jade', 'stylus', 'coffee', 'watch'], function() {
	console.log('Starting gulp!')
})
