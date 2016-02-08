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

    Shot.prototype.tick = function(ms) {        //задаем минимальный шаг для игрока
        move(this, ms);
    };

    function move(player, ms) {                   //описываем движение игрока
        if (player.state.movement != 'forward' && player.state.movement != 'backward') { return; }   //если мы не движемся вперед или назад, ничего не делай

        var dx = Math.abs(Math.cos(player.angle) * VELOCITY * ms);                                   //выносим изменения координат для сокращения след. кода
        var dy = Math.abs(Math.sin(player.angle) * VELOCITY * ms);

        if (0 < player.angle && player.angle < Math.PI / 2) { dx = dx; dy = dy; }                  //прописываем зависимость изменения координат от угла поворота игрока
        if (player.angle == Math.PI / 2) { dx = 0; dy = dy; }
        if (Math.PI / 2 < player.angle && player.angle < Math.PI) { dx = -dx; dy = dy; }
        if (player.angle == Math.PI) { dx = -dx; dy = 0; }
        if (Math.PI < player.angle && player.angle < 3 / 2 * Math.PI) { dx = -dx; dy = -dy; }
        if (player.angle == Math.PI * 3 / 2) { dx = 0; dy = -dy; }
        if (3 / 2 * Math.PI < player.angle && player.angle < 2 * Math.PI) { dx = dx; dy = -dy; }
        if (player.angle == Math.PI * 2) { dx = dx; dy = 0; }
        player.x += (player.state.movement == 'forward' ? 1 : -1) * dx;                              //если движемся вперед, то увеличивай координату, иначе уменьшай
        player.y += (player.state.movement == 'forward' ? 1 : -1) * dy;

        if (player.x <= 0) { player.x = 0; }       //задаем ограничения по координатам, чтобы не вылететь за края экрана
        if (player.x >= 1) { player.x = 1; }
        if (player.y <= 0) { player.y = 0; }
        if (player.y >= 1) { player.y = 1; }
    }

    window.Game.Model.Shot = Shot;
})();