'use strict'


/**
 * Module dependencies.
 */
var stylus = require( 'stylus' )
var path = require( 'path' )


/**
 * Return the plugin callback for stylus.
 * @return {Function}
 * @api public
 */
function animate( opts ) {
  return function( style ) {
    style.include( __dirname )

    // if no opts passed in just create an empty obj
    if ( typeof opts === 'undefined' ) {
      opts = {}
    }

    // if true, output all css
    style.define( '$animate-all', opts.all || false )
    style.define( '$animate-opts', opts || false, true )

    style.define( '$animate-base', opts.base || false )
    style.define( '$animate-attention-seekers', opts.attentionSeekers || false )
    style.define( '$animate-bling', opts.bling || false )
    style.define( '$animate-bomb', opts.bomb || false )
    style.define( '$animate-bouncing-entrances', opts.bouncingEntrances || false )
    style.define( '$animate-bouncing-exits', opts.bouncingExits || false )
    style.define( '$animate-fading-entrances', opts.fadingEntrances || false )
    style.define( '$animate-fading-exits', opts.fadingExits || false )
    style.define( '$animate-flippers', opts.flippers || false )
    style.define( '$animate-lightspeed', opts.lightspeed || false )
    style.define( '$animate-magic-effects', opts.magicEffects || false )
    style.define( '$animate-math', opts.math || false )
    style.define( '$animate-perspective', opts.perspective || false )
    style.define( '$animate-rotate', opts.rotate || false )
    style.define( '$animate-rotating-entrances', opts.rotatingEntrances || false )
    style.define( '$animate-rotating-exits', opts.rotatingExits || false )
    style.define( '$animate-sliders', opts.sliders || false )
    style.define( '$animate-sliding-entrances', opts.slidingEntrances || false )
    style.define( '$animate-sliding-exits', opts.slidingExits || false )
    style.define( '$animate-specials', opts.specials || false )
    style.define( '$animate-static', opts.static || false )
    style.define( '$animate-tin', opts.tin || false )
    style.define( '$animate-zooming-entrances', opts.zoomingEntrances || false )
    style.define( '$animate-zooming-exits', opts.zoomingExits || false )
  }
}

exports = module.exports = animate

/**
 * Library version.
 */
exports.version = require( path.join( __dirname, '../package.json' ) ).version

/**
 * Stylus path.
 */
exports.path = __dirname
