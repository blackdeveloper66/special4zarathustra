module('View Game');                              //задаем название модуля

/*
 Setup
 Action
 Assert
 */

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var game  = new Game.View.Game();
    var model = {};

    ok(game.player instanceof Game.Model.Player, 'See valid player');     //Проверем, что тип game.player это Game.Model.Player
});