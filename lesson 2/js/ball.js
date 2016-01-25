function Ball() {               // описываем объект мяч
    this.start();               // задаем начальное состояние
}

Ball.prototype.tick = function(ms) {       // описываем минимальный шаг мяча
    this.x += this.velox * ms;              // изменение положения
    this.y += this.veloy * ms;
}

Ball.prototype.draw = function(ctx) {       // описываем как отрисовывать мяч
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fill();
}

Ball.prototype.start = function() {         // описываем начальное состояние
    this.x = 250;
    this.y = 250;
    this.velox = 0.2;
    this.veloy = 0.1;
}