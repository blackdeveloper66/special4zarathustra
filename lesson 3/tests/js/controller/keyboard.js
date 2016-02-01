module('Controller Keyboard');                              //задаем название модуля

/*
 Setup
 Action
 Assert
 */

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var game = {};
    var emitter = {};                                //Пустой объект
    var keyboard = new Game.Controller.Keyboard(game, emitter);

    equal(keyboard.game, game, 'See valid game');
    equal(keyboard.emitter, emitter, 'See valid emitter');
    ok(emitter.onkeydown instanceof Function, 'See valid emitter.onkeydown');
    ok(emitter.onkeyup   instanceof Function, 'See valid emitter.onkeyup');
});

test('Onkeydown', function() {
    var game = new Game.Model.Game;
    var emitter = {};                                //Пустой объект
    var keyboard = new Game.Controller.Keyboard(game, emitter);

    // Нажали на кнопку вверх
    emitter.onkeydown({ keyCode : 38 });
    equal(game.player.state.movement, 'forward', 'See valid player.state after up keydown');

    //Нажали на кнопку вниз
    emitter.onkeydown({ keyCode : 40 });
    equal(game.player.state.movement, 'backward', 'See valid player.state after down keydown');

    //Нажали на кнопку влево
    emitter.onkeydown({ keyCode : 37 });
    equal(game.player.state.angle, 'left', 'See valid player.state after left keydown');

    //Нажали на кнопку вправо
    emitter.onkeydown({ keyCode : 39 });
    equal(game.player.state.angle, 'right', 'See valid player.state after right keydown');
});

test('Onkeyup', function() {
    var game = new Game.Model.Game;
    var emitter = {};                                //Пустой объект
    var keyboard = new Game.Controller.Keyboard(game, emitter);

    // Отпустили кнопку вверх
    game.player.state.movement = 'forward';
    emitter.onkeyup({ keyCode : 38 });
    equal(game.player.state.movement, '', 'See valid player.state while moving forward after up keyup');

    game.player.state.movement = 'backward';
    emitter.onkeyup({ keyCode : 38 });
    equal(game.player.state.movement, 'backward', 'See valid player.state while moving backward after up keyup');

    // Отпустили кнопку вниз
    game.player.state.movement = 'backward';
    emitter.onkeyup({ keyCode : 40 });
    equal(game.player.state.movement, '', 'See valid player.state while moving backward after down keyup');

    game.player.state.movement = 'forward';
    emitter.onkeyup({ keyCode : 40 });
    equal(game.player.state.movement, 'forward', 'See valid player.state while moving forward after down keyup');

    //Отпустили кнопку влево
    game.player.state.angle = 'left';
    emitter.onkeyup({ keyCode : 37 });
    equal(game.player.state.angle, '', 'See valid player.state while rotating to the left after left keyup');

    game.player.state.angle = 'right';
    emitter.onkeyup({ keyCode : 37 });
    equal(game.player.state.angle, 'right', 'See valid player.state while rotating to the right after left keyup');

    //Отпустили кнопку вправо
    game.player.state.angle = 'right';
    emitter.onkeyup({ keyCode : 39 });
    equal(game.player.state.angle, '', 'See valid player.state while rotating to the right after right keyup');

    game.player.state.angle = 'left';
    emitter.onkeyup({ keyCode : 39 });
    equal(game.player.state.angle, 'left', 'See valid player.state while rotating to the left after right keyup');
});

