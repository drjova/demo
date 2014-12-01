/*
 * demo
 * https://github.com/drjova/demo
 *
 * Copyright (c) 2014 Harris Tzovanakis
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.demo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.demo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.demo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.demo.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].demo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
