(function () {
    function Movable() {
    }

    Movable.prototype.move = function(ms, movement, velocity) {                   //описываем движение игрока
        if (movement != 'forward' && movement != 'backward') { return; }   //если мы не движемся вперед или назад, ничего не делай

        var dx = Math.abs(Math.cos(this.angle) * velocity * ms);                                   //выносим изменения координат для сокращения след. кода
        var dy = Math.abs(Math.sin(this.angle) * velocity * ms);

        if (0 < this.angle && this.angle < Math.PI / 2) { dx = dx; dy = dy; }                  //прописываем зависимость изменения координат от угла поворота игрока
        if (this.angle == Math.PI / 2) { dx = 0; dy = dy; }
        if (Math.PI / 2 < this.angle && this.angle < Math.PI) { dx = -dx; dy = dy; }
        if (this.angle == Math.PI) { dx = -dx; dy = 0; }
        if (Math.PI < this.angle && this.angle < 3 / 2 * Math.PI) { dx = -dx; dy = -dy; }
        if (this.angle == Math.PI * 3 / 2) { dx = 0; dy = -dy; }
        if (3 / 2 * Math.PI < this.angle && this.angle < 2 * Math.PI) { dx = dx; dy = -dy; }
        if (this.angle == Math.PI * 2) { dx = dx; dy = 0; }
        this.x += (movement == 'forward' ? 1 : -1) * dx;                              //если движемся вперед, то увеличивай координату, иначе уменьшай
        this.y += (movement == 'forward' ? 1 : -1) * dy;

        if (this.x <= 0) { this.x = 0; }       //задаем ограничения по координатам, чтобы не вылететь за края экрана
        if (this.x >= 1) { this.x = 1; }
        if (this.y <= 0) { this.y = 0; }
        if (this.y >= 1) { this.y = 1; }
    }

    window.Game.Model.Movable = Movable;
})();