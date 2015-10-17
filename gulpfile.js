var gulp = require( 'gulp' )
var stylus = require( 'gulp-stylus' )
var animate = require( './lib/animate' )

// css processing
var autoprefixer = require('autoprefixer')
var postcss = require('gulp-postcss')
var processors = [
  autoprefixer({ // standardizes css prefixes across browser versions
    browsers: ['> 0.5%', 'ie >= 10', 'ios >= 8']
  }),
]

/**
 * compiles, autoprefixes, minifies, the stylus
 */
gulp.task( 'stylus', function() {
  return gulp.src( 'index.styl' )
    .pipe( stylus( {
      compress: false,
      use: animate({
        all: true,
      }),
    } ) )
    .pipe( postcss( processors ) )
    .pipe( gulp.dest( './css' ) )
} )

/**
 * Watch for file changes and rebuild. For client side changes we can
 * automatically reload the files without having to reload the server.
 * Server side changes require a SIGHUP to restart the server.
 */
gulp.task('watch', function() {
  return gulp.watch(['./styl/**/*.styl'], ['stylus'])
})


gulp.task( 'default', ['stylus', 'watch'] )
