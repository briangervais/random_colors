var $ = require('jquery');

$(document).ready(function() {

  // Global S,L,A values
  var sG = '50' + '%'; // Saturation
  var lG = '50' + '%'; // Lightness
  var aG = '1'; // Alpha

  // Random H value
  // between 0-360
  function randomH() {
    // Get random number between 0 - 360
    var h = Math.floor(Math.random() * 360) + 1;
    var s = sG;
    var l = lG;
    var a = aG;
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  function resetHSLA() {
    $('input[type=range]').val();
    var h = $('input[type=range]').val();
    var s = sG;
    var l = lG;
    var a = aG;
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  function opposite(color) {
    var h = color - 180;
    var s = sG;
    var l = lG;
    var a = aG;
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  function triad1(color) {
    var h = color - 120;
    var s = sG;
    var l = lG;
    var a = aG;
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  function triad2(color) {
    var h = color - 240;
    var s = sG;
    var l = lG;
    var a = aG;
    var hsla = h + ', ' + s + ', ' + l + ', ' + a;

    // Return HSLA value
    return hsla;
  }

  // HSLA
  var rc1 = randomH();
  var rc2 = opposite(rc1.substr(0, rc1.indexOf(',')));
  var rc3 = triad1(rc1.substr(0, rc1.indexOf(',')));
  var rc4 = triad2(rc1.substr(0, rc1.indexOf(',')));

  // Add Class to Body #1
  // TODO: Move to init function
  $('body').addClass('loaded');

  //
  // Set CSS of Elements
  // TODO: Move to init function

  $('body').css({
    'background': 'hsla(' + rc1 + ')'
  });

  // Dog
  $('text').css({
    'background': 'hsla(' + rc2 + ')',
    'color': 'hsla(' + rc1 + ')'
  });


  $('color:nth-of-type(1)').css({
    'background': 'hsla(' + rc1 + ')'
  })

  $('color:nth-of-type(2)').css({
    'background': 'hsla(' + rc3 + ')'
  })

  $('color:nth-of-type(3)').css({
    'background': 'hsla(' + rc4 + ')'
  })

  // Listener Function
  // TODO: Move to Listener function
  $('input[type=range]').on('change', function() {
    // console.log($(this).val());

    // Get HSLA based value of input
    var rc5 = resetHSLA();
    var rc6 = opposite(rc5.substr(0, rc5.indexOf(',')));
    var rc7 = triad1(rc5.substr(0, rc5.indexOf(',')));
    var rc8 = triad2(rc5.substr(0, rc5.indexOf(',')));

    $('body').css({
      'background': 'hsla(' + rc5 + ')'
    });

    // Dog
    $('text').css({
      'background': 'hsla(' + rc6 + ')',
      'color': 'hsla(' + rc5 + ')'
    });


    $('color:nth-of-type(1)').css({
      'background': 'hsla(' + rc5 + ')'
    })

    $('color:nth-of-type(2)').css({
      'background': 'hsla(' + rc7 + ')'
    })

    $('color:nth-of-type(3)').css({
      'background': 'hsla(' + rc8 + ')'
    })
  });
});
