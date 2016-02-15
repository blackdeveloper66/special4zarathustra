module('Model Game');                              //задаем название модуля

/*
 Setup
 Action
 Assert
 */

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var game = new Game.Model.Game();

    ok(game.player instanceof Game.Model.Player, 'See valid player');     //Проверем, что тип game.player это Game.Model.Player
    ok(game.on instanceof Function && game.dispatchEvent instanceof Function, 'See events');
    deepEqual(game.shots, [], 'See valid shots');
});

test('tick', function() {
    var game = new Game.Model.Game();
    game.player.tick = sinon.stub();
    game.shots.push({ tick : sinon.stub() });

    game.tick(42);

    ok(game.player.tick.calledOnce, 'game.player.tick was called');
    ok(game.player.tick.calledWith(42), 'game.player.tick was called with valid arguments');
    ok(game.shots[0].tick.calledOnce, 'game.shots.tick was called');
    ok(game.shots[0].tick.calledWith(42), 'game.shots.tick was called with valid arguments');
});

test('shot', function() {
    var game = new Game.Model.Game();
    game.dispatchEvent = sinon.stub();

    game.shot();

    equal(game.shots.length, 1, 'See valid number of shots');
    ok(game.dispatchEvent.calledOnce, 'game.dispatchEvent was called');
});