// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};
  //this.dancer = {};

  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  //this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);

  //return dancer;
};

makeDancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
  console.log('makeDancer step is being called');
  console.log(this)
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};