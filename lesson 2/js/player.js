function Player() {             //описываем игрока
    this.y = 250;
    this.state = '';            //состояние игрока
    this.velo = 0.2;
}

Player.prototype.tick = function(ms) {      // описываем минимальный шаг игрока
    switch (this.state){                    // меняем состояние игрока
        case 'up':
            this.y -= ms * this.velo;
            break;
        case 'down':
            this.y += ms * this.velo;
            break;
    }
    if (this.y < 0) {                       // ограничиваем движение игрока границами канваса
        this.y = 0;
    }
    if (this.y > 500) {
        this.y = 500;
    }
}

Player.prototype.draw = function(ctx, x) {       // описываем как отрисовывать игрока
    ctx.fillRect(x - 15, this.y - 30, 30, 60);      // (x, y, width, height)
}