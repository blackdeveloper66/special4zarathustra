(function() {                                     //создаем модуль для модели (описываем бизнес-логику игры)
    var VELOCITY       = 0.0001;                  //используем константы скорости и скорости поворота внутри данного модуля
    var ANGLE_VELOCITY = Math.PI * 0.001;

    function Player() {                           //описываем игрока
        this.x     = 0.5;
        this.y     = 0.5;
        this.angle = 0;
        this.state = {                            //состояние игрока состоит из состояний угла поворота и движения
            angle    : '',
            movement : ''
        };
    }

    Player.prototype = new window.Game.Model.Movable;

    Player.prototype.tick = function(ms) {        //задаем минимальный шаг для игрока
        this.move(ms, this.state.movement, VELOCITY);
        rotate(this, ms);
    };

    function rotate(player, ms) {                  //описываем вращение игрока вокруг своей оси
        if (player.state.angle != 'left' && player.state.angle != 'right') { return; }                //если не поворачиваемся ни вправо, ни влево, то ничего не делай

        player.angle += (player.state.angle == 'left' ? 1 : -1) * ANGLE_VELOCITY * ms;                //если мы поворачиваемся против часовой стрелки, то угол увеличивается и наоборот

        while (player.angle < 0) { player.angle += Math.PI * 2; }                                     //если угол становится отрицательным, то накинь 2 Пи , для чистоты расчетов
        while (player.angle > Math.PI * 2) { player.angle -= Math.PI * 2; }                           //если угол становится больше 2 Пи, то вычти из него 2 Пи , для чистоты расчетов
    }

    window.Game.Model.Player = Player;              //прокидываем данные в глобальный скоуп исполнения
})();