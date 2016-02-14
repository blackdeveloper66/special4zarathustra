(function () {
    var VELOCITY       = 0.0002;                  //используем константы скорости и скорости поворота внутри данного модуля

    function Shot(x, y, angle) {
        this.x     = x;
        this.y     = y;
        this.angle = angle;
        this.state = {
            movement: 'forward'
        };
    }

    Shot.prototype = new window.Game.Model.Movable;

    Shot.prototype.tick = function(ms) {        //задаем минимальный шаг для игрока
        this.move(ms,this.state.movement, VELOCITY);
    };

    window.Game.Model.Shot = Shot;
})();