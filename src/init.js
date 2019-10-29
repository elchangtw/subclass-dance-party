$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //dancer-maker-function-name

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.on('mouseover', function(event) {
      dancer.$node.css('border', '25px solid #886654');
    });

    dancer.$node.on('click', function(event) {
      dancer.$node.css('border', '25px solid #adf542');

      var distanceToNode = [];
      var currentNodeTop = dancer.top;
      var currentNodeLeft = dancer.left;
      var minDistance = 800;
      var minIndex;
      for ( var i = 0; i < window.dancers.length; i++ ) {
        var distance = Math.sqrt(Math.pow(window.dancers[i].top - currentNodeTop, 2) + Math.pow(window.dancers[i].left - currentNodeLeft, 2));
        distanceToNode.push(distance);
        if (distance < minDistance && distance !== 0) {
          minDistance = distance;
          minIndex = i;
        }
      }
      window.dancers[minIndex].setPosition(dancer.top+20, dancer.left+20);
      //console.log(distanceToNode);
      //console.log(minIndex);
    });


    window.dancers.push(dancer);
  });


  $('.addBouncyButton').on('click', function(event) {
    //console.log("hi")
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // //dancer-maker-function-name

    // // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.on('mouseover', function(event) {
      dancer.$node.css('background-color', '#886654');
    });

    window.dancers.push(dancer);
  });

  $('.addSlidingButton').on('click', function(event) {
    //console.log("hello")

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000 + Math.random() * 1000
    );
    // dancer.$node.addClass("bouncy-dancer");
    // dancer.$node.css('margin-top', $("body").height() * Math.random());
    $('body').append(dancer.$node);
    dancer.$node.on('mouseover', function(event) {
      dancer.$node.css('background-color', '#886654');
    });

    window.dancers.push(dancer);
  });

  $('.lineupButton').on('click', function(event) {
    console.log('lineup attemped');
    for ( var i = 0; i < window.dancers.length; i++ ) {

      /*
      var styleSettings = {
        top: top,
        left: left
      };
      this.$node.css(styleSettings);
      */
      window.dancers[i].setPosition(100);
      window.dancers[i].$node.css('margin-top', "100px");
    }
  });

  $('.dancer').on('click', function(event) {
    console.log('i selected a node');
    //window.dancers[0].$node.css('background-color', 'red');
  });

});

