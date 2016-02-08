//Тестируем модель на предмет внутренних ошибок до подключения модели.

module('Model Player');                              //задаем название модуля

/*
 Setup
 Action
 Assert
*/

test('Constructor', function() {                     //Тестируем конструктор, на предмет того, что все начальные условия равны тем что мы хотим
    var player = new Game.Model.Player();            //Setup    (создаем плеера на основе уже имеющегося)

    equal(player.x, 0.5, 'See valid x');             //Assert (делаем проверку того что заложено в игроке с тем, что там должно лежать)
    equal(player.y, 0.5, 'See valid y');
    equal(player.angle, 0, 'See valid angle');
    equal(player.state.movement, '', 'See valid movement state');
    equal(player.state.angle, '', 'See valid angle state');
});

test('tick without state', function() {               //Тестируем как работает тик в изначальном состоянии игрока
    var player = new Game.Model.Player();             //Setup

    player.tick(1000);                                //Action (Делаем 1000 минимальных шагов)

    equal(player.x, 0.5, 'See valid x');              //Ассерты (ничего не должно измениться)
    equal(player.y, 0.5, 'See valid y');
    equal(player.angle, 0, 'See valid angle');
});

test('tick with movement state "forward"', function() {     //Тестируем изменения при минимальных шагах и состоянии игрока "двигаться вперед"
    var player = new Game.Model.Player();                   //Setup
    player.state.movement = 'forward';                      //Setup

    player.tick(100);                                       //Action

    equal(player.x, 0.51, 'See valid x');                   //Assert
    equal(player.y, 0.5, 'See valid y');                    //Assert
});

test('tick with movement state "backward"', function() {
    var player = new Game.Model.Player();
    player.state.movement = 'backward';

    player.tick(100);

    equal(player.x, 0.49, 'See valid x');
    equal(player.y, 0.5, 'See valid y');
});

test('tick with angle state "left"', function() {
    var player = new Game.Model.Player();
    player.state.angle = 'left';

    player.tick(100);

    equal(player.angle, Math.PI * 0.1, 'See valid angle');
});

test('tick with angle state "right"', function() {
    var player = new Game.Model.Player();
    player.state.angle = 'right';                //setup

    player.tick(100);     //action

    equal(player.angle, Math.PI * (2 - 0.1), 'See valid angle');    // assert
});

test('tick with angles (PI/4, 3/4*PI, 5/4*PI, 7/4*PI)', function() {                        //Смотрим как повередет себя игрок при минимальных шагах и разных углах кратных Пи/4 и с шагом в Пи
    var dx = Math.cos(Math.PI / 4) * 0.01;
    var dy = Math.sin(Math.PI / 4) * 0.01;

    testAngle('PI/4',   Math.PI / 4,     0.5 + dx, 0.5 + dy);                               //Тестируем каждый угол отдельно
    testAngle('3/4*PI', Math.PI * 3 / 4, 0.5 - dx, 0.5 + dy);
    testAngle('5/4*PI', Math.PI * 5 / 4, 0.5 - dx, 0.5 - dy);
    testAngle('7/4*PI', Math.PI * 7 / 4, 0.5 + dx, 0.5 - dy);

    function testAngle(name, angle, x, y) {                                                  //Setup
        var player = new Game.Model.Player();
        player.angle = angle;
        player.state.movement = 'forward';

        player.tick(100);                                                                   //action

        equal(player.x, x, 'See valid x (' + name + ')');                                   //assert
        equal(player.y, y, 'See valid y (' + name + ')');
    }
});

test('x after call tick more then 0', function() {                                          //Тестируем, что игрок не улетит за край экрана
    var player = new Game.Model.Player();
    player.state.movement = 'backward';

    player.tick(1000000);

    equal(player.x, 0, 'See valid x');
});

test('y after call tick more then 0', function() {
    var player = new Game.Model.Player();
    player.angle = Math.PI / 2;
    player.state.movement = 'forward';

    player.tick(1000000);

    equal(player.y, 1, 'See valid y');
});

test('y after call tick less then 1', function() {
    var player = new Game.Model.Player();
    player.angle = Math.PI / 2;
    player.state.movement = 'backward';

    player.tick(1000000);

    equal(player.y, 0, 'See valid y');
});

test('angle after call tick less then 2*PI', function() {
    var player = new Game.Model.Player();
    player.state.angle = 'left';

    player.tick(2001);

    ok(Math.abs(player.angle - Math.PI * 0.001) < 0.0000000001, 'See valid angle');
});