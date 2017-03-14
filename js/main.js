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

  // Random H value (hsla)
  // between 0-360
  function randomH(h) {
    // Get random number between 0 - 360
    var h = Math.floor(Math.random() * 360) + 1;
    var s = '50' + '%';
    var l = '50' + '%';
    var a = '1';
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  function opposite(color) {
    // Get random number between 0 - 360
    var h = color - 180;
    var s = '50' + '%';
    var l = '50' + '%';
    var a = '1';
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }
  // Totes Random
  // var rc1 = randomcolor.randomColor();
  // var rc2 = randomcolor.randomColor();
  // var rc3 = randomcolor.randomColor();
  // var rc4 = randomcolor.randomColor();
  // var rc5 = randomcolor.randomColor();
  // var rc6 = randomcolor.randomColor();

  // var rc1 = betterColor();
  // var rc2 = betterColor();
  // var rc3 = betterColor();
  // var rc4 = betterColor();
  // var rc5 = betterColor();
  // var rc6 = betterColor();

  // HSLA
  var rc1 = randomH();
  var rc2 = opposite(rc1.substr(0, rc1.indexOf(',')));

  console.log(rc1, rc2);

  // Add Class to Body #1
  // TODO: Move to init function
  $('body').addClass('loaded');

  //
  // Set CSS of Elements
  //

  $('body').css({
    'background': 'hsla(' + rc1 + ')'
  });

  // $('.vein:first-of-type').css({
  //   background: rc5
  // });
  //
  // $('.vein:last-of-type').css({
  //   background: rc6
  // });
  //


  // Dog
  $('text').css({
    'background': 'hsla(' + rc2 + ')',
    'color': 'hsla(' + rc1 + ')'
  });

  //
  // $('color:nth-of-type(1)').css({
  //   'background': rc3
  // })
  //
  // $('color:nth-of-type(2)').css({
  //   'background': rc4
  // })
  //
  // $('color:nth-of-type(3)').css({
  //   'background': rc5
  // })
});
