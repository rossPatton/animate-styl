# Animate Styl (now on NPM!)
*Just-add-water CSS animation*

`npm i animate-styl`


## disclaimer
So this is a fork of a fork. [slang800](https://github.com/slang800) and [Dan Eden](https://github.com/daneden) deserve credit for their work on this, but I will be making some potentially substantial changes here.

`animate-styl` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.


## Usage
By default animate-styl doesn't auto generate all the keyframe animations and classes. There are 2 ways to tell animate-styl what animations you want to include in your project.


## Using the config object

```javascript
// i am using gulp here because i'm most familiar with it, 
// but you can use whatever build system you want here
gulp.task( 'stylus', function() {
  return gulp.src( './styl/main.styl' )
    .pipe( stylus( {
      use: animate({
        all: false, // generate all classes by default, like pulling in the entire animate.css file
        base: true, // generates base .animated class
        attentionSeekers: true,
        base: true,
        bling: true,
        bomb: true,
        bouncingEntrances: true,
        bouncingExits: true,
        fadingEntrances: true,
        fadingExits: true,
        flippers: true,
        lightspeed: true,
        magic: true,
        math: true,
        perspective: true,
        rotate: true,
        rotatingEntrances: true,
        rotatingExits: true,
        slidingEntrances: true,
        slidingExits: true,
        specials: true,
        zoomingEntrances: true,
        zoomingExits: true,
      }),
    } ) )
    .pipe( gulp.dest( './css' ) )
} )
```

and then in your stylus:

```stylus
@require 'animate'
// your animation code is auto generated here

.bounce-in
  animation-name: bounceIn
```

The above is just to show all the options. Ideally you'd only pass in what you need, or, if you want everything, you can just pass in `all: true`.


## Include/Exclude Animations without the config object
There's no need to make custom builds because with Stylus you can import everything you want, and nothing you don't.

For example, if you only use the `slideInDown` animation then you don't `@require` the whole library - just `@require 'animate-stylus/sliders/slideInDown'`. Or, if you want all the sliders, you can `@require 'animate-stylus/sliders/*'`. See the Stylus Docs for an explanation of [file globbing](http://learnboost.github.io/stylus/docs/import.html#file-globbing).

HOWEVER, I feel like the ideal way to use this is to use the config object as part of your build step. Do whatever you want though.

Example of this method:

```stylus
@require 'animate/lib/bling/*
// all bling animations here, but nothing else
```


## Vendor Prefixes
I've left the code unprefixed so you can support whatever browsers you're targeting without having them chosen for you. I recommend using [nib](http://visionmedia.github.io/nib/) or [auto-prefixer](https://github.com/ai/autoprefixer) to add the prefixes.


## Adding Animations with Class Names
I will be making a config option to auto-generate these based on your ideal naming convention, but until then here's a way you can do it yourself:


```stylus
//list of animations that we are using
animations = (bounce slideInDown slideOutUp)

.animated
  animation-duration: 1s
  animation-fill-mode: both

for animation_name in animations
  .{animation_name}
    animation-name: animation_name
```

And then adding animations to elements with class names will work:

```html
<div class='bounce'>This is bouncing</div>
```

