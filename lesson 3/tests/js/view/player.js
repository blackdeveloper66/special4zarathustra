module('View player');

test('Constructor', function() {
    var game            = { element : { appendChild : sinon.stub() } };
    var model           = {};
    var element         = { setAttribute : sinon.stub() };
    var documentElement = { createElement : sinon.stub().returns(element) };

    var player          = new Game.View.Player(game, model, documentElement);

    equal(player.game, game, 'See valid game');
    equal(player.model, model, 'See valid model');
    equal(player.element, element, 'See valid element');
    ok(documentElement.createElement.calledOnce, 'documentElement.createElement was called');
    ok(documentElement.createElement.calledWith('div'), 'documentElement.createElement was called with valid arguments');
    ok(element.setAttribute.calledOnce, 'element.setAttribute was called');
    ok(element.setAttribute.calledWith('class', 'player'), 'element.setAttribute was called with valid arguments');
    ok(game.element.appendChild.calledOnce, 'game.element.appendChild was called');
    ok(game.element.appendChild.calledWith(element), 'game.element.appendChild was called with valid arguments');
});

test('tick', function() {
    var game            = { element : { appendChild : sinon.stub() } };
    var model           = { x : 0.1, y : 0.2, angle : 1 - Math.PI / 2 };
    var element         = { setAttribute : sinon.stub() };
    var documentElement = { createElement : sinon.stub().returns(element) };
    var player          = new Game.View.Player(game, model, documentElement);
    player.element.setAttribute = sinon.stub();

    player.tick();

    ok(player.element.setAttribute.calledOnce, 'player.element.setAttribute was called');
    ok(player.element.setAttribute.calledWith('style', 'left:10%;top:20%;transform:rotate(1rad)'), 'player.element.setAttribute was called with valid arguments');
});