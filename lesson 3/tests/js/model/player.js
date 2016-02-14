module('Model Player');

test('Constructor', function(){
    var player = new Game.Model.Player();

    equal(player.x, 0.5, 'See valid x');             //Assert (делаем проверку того что заложено в игроке с тем, что там должно лежать)
    equal(player.y, 0.5, 'See valid y');
    equal(player.angle, 0, 'See valid angle');
    equal(player.state.movement, '', 'See valid movement state');
    equal(player.state.angle, '', 'See valid angle state');

});

test('Move called', function() {
    var player = new Game.Model.Player();

    player.move = sinon.spy();

    player.tick(2);

    ok(player.move.calledOnce, 'player.move called');
    ok(player.move.calledWith(2), 'player.move argument is valid');
});

test('tick with angle state "left"', function() {
    var player = new Game.Model.Player();
    player.state.angle = 'left';

    player.tick(100);

    equal(player.angle, Math.PI * (2 - 0.1), 'See valid angle');
});

test('tick with angle state "right"', function() {
    var player = new Game.Model.Player();
    player.state.angle = 'right';                //setup

    player.tick(100);     //action

    equal(player.angle, Math.PI * 0.1, 'See valid angle');    // assert
});
