var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();

  this.$node.animate({
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()

  });
  this.$node.addClass("sliding-dancer");
};