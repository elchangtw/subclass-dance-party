var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("bouncy-dancer");
  this.$node.css('margin-top', $("body").height() * Math.random());
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  //this.timeBetweenSteps = 0;
  this.$node.addClass("bouncy-dancer");
  //this.$node.css( 'margin-top', $("body").height() * Math.random() );
};