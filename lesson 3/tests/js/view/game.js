module('View Game');                              //задаем название модуля

/*
 Setup
 Action
 Assert
 */

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var model            = {};
    var element          = { appendChild : function() { } };
    var documentElement  = {
        getElementById : sinon.stub().returns(element),
        createElement  : sinon.stub().returns({ setAttribute : function() { } })
    };

    var game  = new Game.View.Game(model, documentElement);

    equal(game.model, model, 'See valid model');
    ok(game.player instanceof Game.View.Player, 'See valid player');     //Проверем, что тип game.player это Game.Model.Player
    ok(documentElement.getElementById.calledOnce, 'documentElement.getElementById called');
    ok(documentElement.getElementById.calledWith('game'), 'documentElement.getElementById called with valid arguments');
    equal(game.element, element, 'See valid element');
});

test('tick', function() {
    var model            = {};
    var element          = { appendChild : function() { } };
    var documentElement  = {
        getElementById : sinon.stub().returns(element),
        createElement  : sinon.stub().returns({ setAttribute : function() { } })
    };
    var game = new Game.View.Game(model, documentElement);
    game.player.tick = sinon.stub();

    game.tick(42);

    ok(game.player.tick.calledOnce, 'game.player.tick called');
    ok(game.player.tick.calledWith(42), 'game.player.tick called with valid arguments');
});