module('Model movable');

test('Move without movement', function() {
    var movable = new Game.Model.Movable();


    VELOCITY = 0.0002;
    movable.x        = 0.5;
    movable.y        = 0.5;
    movable.angle    = Math.PI / 4;
    movable.movement = '';

    movable.move(12, movable.movement, VELOCITY);

    equal(movable.x, 0.5, 'See valid x');
    equal(movable.y, 0.5, 'See valid y');
    equal(movable.angle, Math.PI / 4, 'See valid angle');
    equal(movable.movement, '', 'See valid movement');
});

test('Move with movement forward', function() {
    var movable = new Game.Model.Movable();

    VELOCITY         = 0.0002;
    movable.x        = 0.5;
    movable.y        = 0.5;
    movable.angle    = Math.PI / 4;
    movable.movement = 'forward';

    var dx = Math.abs(Math.cos(movable.angle) * VELOCITY * 100);
    var dy = Math.abs(Math.sin(movable.angle) * VELOCITY * 100);

    movable.move(100, movable.movement, VELOCITY);

    equal(movable.x, 0.5 + dx, 'See valid x');
    equal(movable.y, 0.5 + dy, 'See valid y');
    equal(movable.angle, Math.PI / 4, 'See valid angle');
    equal(movable.movement, 'forward', 'See valid movement');
});

test('Move with movement backward', function() {
    var movable = new Game.Model.Movable();

    VELOCITY         = 0.0002;
    movable.x        = 0.5;
    movable.y        = 0.5;
    movable.angle    = Math.PI / 4;
    movable.movement = 'backward';

    var dx = Math.abs(Math.cos(movable.angle) * VELOCITY * 100);
    var dy = Math.abs(Math.sin(movable.angle) * VELOCITY * 100);

    movable.move(100, movable.movement, VELOCITY);

    equal(movable.x, 0.5 - dx, 'See valid x');
    equal(movable.y, 0.5 - dy, 'See valid y');
    equal(movable.angle, Math.PI / 4, 'See valid angle');
    equal(movable.movement, 'backward', 'See valid movement');
});

test('Move with angles (PI/4, 3/4*PI, 5/4*PI, 7/4*PI)', function() {                        //Смотрим как повередет себя игрок при минимальных шагах и разных углах кратных Пи/4 и с шагом в Пи
    var dx = Math.abs(Math.cos(Math.PI / 4) * 0.0002 * 100);
    var dy = Math.abs(Math.sin(Math.PI / 4) * 0.0002 * 100);

    testAngle('PI/4',   Math.PI / 4,     0.5 + dx, 0.5 + dy);                               //Тестируем каждый угол отдельно
    testAngle('3/4*PI', Math.PI * 3 / 4, 0.5 - dx, 0.5 + dy);
    testAngle('5/4*PI', Math.PI * 5 / 4, 0.5 - dx, 0.5 - dy);
    testAngle('7/4*PI', Math.PI * 7 / 4, 0.5 + dx, 0.5 - dy);

    function testAngle(name, angle, x, y) {                                                  //Setup
        var movable = new Game.Model.Movable();

        movable.x        = 0.5;
        movable.y        = 0.5;
        movable.angle    = angle;
        movable.movement = 'forward';

        movable.move(100, movable.movement, 0.0002);                                                                   //action

        equal(movable.x, x, 'See valid x (' + name + ')');                                   //assert
        equal(movable.y, y, 'See valid y (' + name + ')');
    }
});

test('Maximum of x & y is 1', function() {
    var movable = new Game.Model.Movable();

    VELOCITY         = 0.0002;
    movable.x        = 0.5;
    movable.y        = 0.5;
    movable.angle    = Math.PI / 4;
    movable.movement = 'forward';

    movable.move(100000, movable.movement, VELOCITY);

    equal(movable.x, 1, 'See valid x');
    equal(movable.y, 1, 'See valid y');
});

test('Minimum of x & y is 0', function() {
    var movable = new Game.Model.Movable();

    VELOCITY         = 0.0002;
    movable.x        = 0.5;
    movable.y        = 0.5;
    movable.angle    = Math.PI / 4;
    movable.movement = 'backward';

    movable.move(100000, movable.movement, VELOCITY);

    equal(movable.x, 0, 'See valid x');
    equal(movable.y, 0, 'See valid y');
});
