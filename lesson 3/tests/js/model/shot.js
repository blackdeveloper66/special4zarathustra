module('Model Shot');

test('Constructor', function() {
    var shot = new Game.Model.Shot(0.5, 0.5, 0);

    equal(shot.x, 0.5, 'See valid x');
    equal(shot.y, 0.5, 'See valid y');
    equal(shot.angle, 0, 'See valid angle');
    equal(shot.state.movement, 'forward', 'See valid movement state');
});

test('Move called', function() {
    var shot = new Game.Model.Player();

    shot.move = sinon.stub();

    shot.tick(2);

    ok(shot.move.calledOnce, 'shot.move called');
    ok(shot.move.calledWith(2), 'shot.move argument is valid')
});