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

    Player.prototype.tick = function(ms) {        //задаем минимальный шаг для игрока
        move(this, ms);
        rotate(this, ms);
    };

    function move(player, ms) {                   //описываем движение игрока
        if (player.state.movement != 'forward' && player.state.movement != 'backward') { return; }   //если мы не движемся вперед или назад, ничего не делай

        var dx = Math.abs(Math.cos(player.angle) * VELOCITY * ms);                                   //выносим изменения координат для сокращения след. кода
        var dy = Math.abs(Math.sin(player.angle) * VELOCITY * ms);

        if (0 <= player.angle && player.angle < Math.PI / 2) { dx = dx; dy = -dy; }                  //прописываем зависимость изменения координат от угла поворота игрока
        if (Math.PI / 2 <= player.angle && player.angle < Math.PI) { dx = -dx; dy = -dy; }
        if (Math.PI <= player.angle && player.angle < 3 / 2 * Math.PI) { dx = -dx; dy = dy; }
        if (3 / 2 * Math.PI <= player.angle && player.angle < 2 * Math.PI) { dx = dx; dy = dy; }

        player.x += (player.state.movement == 'forward' ? 1 : -1) * dx;                              //если движемся вперед, то увеличивай координату, иначе уменьшай
        player.y += (player.state.movement == 'forward' ? 1 : -1) * dy;

        if (player.x <= 0) { player.x = 0; }       //задаем ограничения по координатам, чтобы не вылететь за края экрана
        if (player.x >= 1) { player.x = 1; }
        if (player.y <= 0) { player.y = 0; }
        if (player.y >= 1) { player.y = 1; }
    }

    function rotate(player, ms) {                  //описываем вращение игрока вокруг своей оси
        if (player.state.angle != 'left' && player.state.angle != 'right') { return; }                //если не поворачиваемся ни вправо, ни влево, то ничего не делай

        player.angle += (player.state.angle == 'left' ? 1 : -1) * ANGLE_VELOCITY * ms;                //если мы поворачиваемся против часовой стрелки, то угол увеличивается и наоборот

        while (player.angle < 0) { player.angle += Math.PI * 2; }                                     //если угол становится отрицательным, то накинь 2 Пи , для чистоты расчетов
        while (player.angle > Math.PI * 2) { player.angle -= Math.PI * 2; }                           //если угол становится больше 2 Пи, то вычти из него 2 Пи , для чистоты расчетов
    }

    window.Game.Model.Player = Player;              //прокидываем данные в глобальный скоуп исполнения
})();