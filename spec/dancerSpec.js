describe('Dancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSteps);
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should have a slide function that makes its node slide', function() {
    sinon.spy(slidingDancer.$node, 'animate');
    slidingDancer.step();
    expect(slidingDancer.$node.animate.called).to.be.true;
  });

  // it('should be checking for mouseover event', function(){
  // });

  /*it('should have a bouncy function that makes its node bounce', function() {
    sinon.spy(bouncyDancer.$node, 'animation');
    bouncyDancer.step();
    expect(bouncyDancer.$node.animation.called).to.be.true;
  });*/

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
