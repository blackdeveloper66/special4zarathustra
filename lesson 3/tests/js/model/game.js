module('Model Game');                              //задаем название модуля

/*
 Setup
 Action
 Assert
 */

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var game = new Game.Model.Game();

    ok(game.player instanceof Game.Model.Player, 'See valid player');     //Проверем, что тип game.player это Game.Model.Player
});

test('tick', function() {
    var game = new Game.Model.Game();
    game.player.tick = sinon.stub();

    game.tick(42);

    ok(game.player.tick.calledOnce, 'game.player.tick called');
    ok(game.player.tick.calledWith(42), 'game.player.tick called with valid arguments');
});
