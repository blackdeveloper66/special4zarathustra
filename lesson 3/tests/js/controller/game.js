module('Controller game');

test('Constructor', function() {
    var game = new Game.Controller.Game();

    ok(game.model instanceof Game.Model.Game, 'See valid game model');
    ok(game.view instanceof Game.View.Game, 'See valid game view');
    ok(game.keyboard instanceof Game.Controller.Keyboard, 'See valid keyboard controller');
    ok(game.intervalId != null && game.intervalId != undefined, 'See intervalId');

    game.stop();
});

test('setInterval', function(assert) {
    var done = assert.async();

    var game = new Game.Controller.Game();

    game.tick = function() {
        ok(true, 'tick was called');

        game.stop();

        done(); //закурили
    };
});

test('tick', function() {
    var game = new Game.Controller.Game();
    game.stop();

    game.model.tick = sinon.spy();
    game.view.tick = sinon.spy();

    game.tick(12);

    ok(game.model.tick.calledOnce, 'player.tick called once');
    ok(game.model.tick.calledWith(12), 'player.tick called with valid argument');
    ok(game.view.tick.calledOnce, 'view.tick called once');
    ok(game.view.tick.calledWith(12), 'view.tick called with valid argument');
});