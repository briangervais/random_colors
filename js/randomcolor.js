var $ = require('jquery');
var randomcolor = require('randomcolor');
// See https://randomcolor.llllll.li/

$(document).ready(function() {

  // Reusable Random Color (randomcolor) Function
  function betterColor() {
    rc = randomcolor.randomColor({
      format: 'hsla',
    });
    return rc;
  }

  // Totes Random
  // var rc1 = randomcolor.randomColor();
  // var rc2 = randomcolor.randomColor();
  // var rc3 = randomcolor.randomColor();
  // var rc4 = randomcolor.randomColor();
  // var rc5 = randomcolor.randomColor();
  // var rc6 = randomcolor.randomColor();

  var rc1 = betterColor();
  var rc2 = betterColor();
  var rc3 = betterColor();
  var rc4 = betterColor();
  var rc5 = betterColor();
  var rc6 = betterColor();

  // Add Class to Body #1
  // TODO: Move to init function
  $('body').addClass('loaded');

  //
  // Set CSS of Elements
  //

  $('body').css({
    'background': 'hsla(' + rc1 + ')'
  });

  $('.vein:first-of-type').css({
    background: rc5
  });

  $('.vein:last-of-type').css({
    background: rc6
  });

  // Text
  $('text').css({
    'background': 'hsla(' + rc2 + ')',
    'color': 'hsla(' + rc1 + ')'
  });

  // Colors
  $('color:nth-of-type(1)').css({
    'background': rc3
  })

  $('color:nth-of-type(2)').css({
    'background': rc4
  })

  $('color:nth-of-type(3)').css({
    'background': rc5
  })
});
