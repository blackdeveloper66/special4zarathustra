module('Controller game');

test('Constructor', function(){
    var game = new Game.Controller.Game(game);

    ok(game.view instanceof Game.View.Game, 'See valid game view');
});