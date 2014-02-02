(function ($) {
  "use strict";

  var NasdaqAnimation = function (attributes) {
    var defaults = {
        offset: 3
      },
      attr = attributes || {};

    /**
     * Set CSS3 Cross-browser transition to element instance
     * @param  {string} string - CSS3 transition string
     */
    function setAnimation(string) {
      attr.el.css({
        webkitTransition  : string,
        mozTransition     : string,
        msTransition      : string,
        oTransition       : string,
        transition        : string
      });
    }

    /**
     * Add animation to element instance
     */
    function addAnimation() {
      var string = 'left ' + attr.duration + 's ' + attr.effect;
      setAnimation(string);
      //Set text animation pixels
      attr.el.css({left: attr.width + 'px'});
    }

    /**
     * Remove animation to element instance
     */
    function removeAnimation() {
      var string = 'none';
      setAnimation(string);
      //Set text width to the beginning
      attr.el.css({left: 0});
    }

    /**
     * Animate element instance text
     */
    function animate() {
      //Remove animation
      removeAnimation();
      //Animate
      setTimeout(addAnimation, attr.loop * 1000);
    }

    /**
     * Detect when CSS3 transition ends
     */
    function eventsOn() {
      attr.el.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', animate);
    }

    /**
     * Initialize function to setup the class
     */
    function initialize() {
      var width;

      //Setup css
      attr.container.css({overflow: 'hidden'});
      attr.el.css({
        whiteSpace: 'pre',
        position: 'relative'
      });

      width = attr.el.width();

      //Check if text is bigger than it's container
      if (width > attr.container.width()) {

        //Calculate text width
        attr.width = (-1 * (width + defaults.offset));
        //Duplicate text
        attr.el.append(' ' + attr.el.html());
        //Add events listeners
        eventsOn();
        //Trigger first animation
        animate();
      }
    }

    return {
      'initialize': initialize
    };
  };

  var DEFAULTS = {
    duration : 50,
    loop     : 1,
    effect   : ''
  };

  /**
   * Create NasdaqAnimation input object
   * @param  {number} el - current jquery element
   * @return {object} NasdaqAnimation input object
   */
  function newattr(el) {
    return {
      container : el,
      el        : el.children('span').first(),
      duration  : el.data().duration || DEFAULTS.duration,
      loop      : el.data().loop     || DEFAULTS.loop,
      effect    : el.data().effect   || DEFAULTS.effect
    };
  }

  /**
   * Initialize jQuery plugin function
   * @return {object} jQuery plugin object
   */
  $.fn.nasdaqAnimation = function () {
    var animation;
    return this.each(function () {
      animation = new NasdaqAnimation(newattr($(this)));
      animation.initialize();
    });
  };

}(jQuery));