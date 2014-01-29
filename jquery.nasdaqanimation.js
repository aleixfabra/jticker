(function ($) {
  "use strict";

  var NasdaqAnimation = function (attr) {
    var defaults = {
        offset: 3
      },
      attributes = attr || {};

    /**
     * Set CSS3 Cross-browser transition to element instance
     * @param  {string} string - CSS3 transition string
     */
    function setAnimation(string) {
      attributes.el.css({
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
      var string = 'left ' + attributes.duration + 's ' + attributes.effect;
      setAnimation(string);
      //Set text animation pixels
      attributes.el.css({left: attributes.width + 'px'});
    }

    /**
     * Remove animation to element instance
     */
    function removeAnimation() {
      var string = 'none';
      setAnimation(string);
      //Set text width to the beginning
      attributes.el.css({left: 0});
    }

    /**
     * Animate element instance text
     */
    function animate() {
      //Remove animation
      removeAnimation();
      //Animate
      setTimeout(addAnimation, attributes.loop * 1000);
    }

    /**
     * Detect when CSS3 transition ends
     */
    function eventsOn() {
      attributes.el.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', animate);
    }

    /**
     * Initialize function to setup the class
     */
    function initialize() {
      //Setup css
      attributes.container.css({overflow: 'hidden'});
      attributes.el.css({
        whiteSpace: 'pre',
        position: 'relative'
      });

      //Check if text is bigger than it's container
      if (attributes.el.width() > attributes.container.width()) {

        //Calculate text width
        attributes.width = (-1 * (attributes.el.width() + defaults.offset));
        //Duplicate text
        attributes.el.append(' ' + attributes.el.html());
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
    duration : 40,
    loop     : 10,
    effect   : ''
  };

  /**
   * Create NasdaqAnimation input object
   * @param  {number} el - current jquery element
   * @return {object} NasdaqAnimation input object
   */
  function newAttributes(el) {
    return {
      container : el,
      el        : el.children('span').first(),
      duration  : el.data('duration') || DEFAULTS.duration,
      loop      : el.data('loop')     || DEFAULTS.loop,
      effect    : el.data('effect')   || DEFAULTS.effect
    };
  }

  /**
   * Initialize jQuery plugin function
   * @return {object} jQuery plugin object
   */
  $.fn.nasdaqAnimation = function () {
    var animation;
    return this.each(function () {
      animation = new NasdaqAnimation(newAttributes($(this)));
      animation.initialize();
    });
  };

}(jQuery));