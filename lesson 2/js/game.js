function Game() {
    this.player1 = new Player();  // создаем экземпляр плеер1
    this.player2 = new Player();
    this.ball = new Ball();

    document.body.onkeydown = function(event) {        // создаем обработчик события и подписываем его на событие
        switch (event.keyCode) {
            case 87 :
                this.player1.state = 'up';
                break;
            case 83 :
                this.player1.state = 'down';
                break;
            case 38 :
                this.player2.state = 'up';
                break;
            case 40 :
                this.player2.state = 'down';
                break;
        }
    }.bind(this);                                    // чтобы избежать исполнения в глобальном контексте исполнения, используй контекст this
    document.body.onkeyup = function(event) {           // создаем обработчики событий клавиатуры и -||-
        switch (event.keyCode) {
            case 87 :
                if (this.player1.state = 'up') {
                    this.player1.state = ''
                };
                break;
            case 83 :
                if (this.player1.state = 'down') {
                    this.player1.state = ''
                };
                break;
            case 38 :
                if (this.player2.state = 'up') {
                    this.player2.state = ''
                };
                break;
            case 40 :
                if (this.player2.state = 'down') {
                    this.player2.state = ''
                };
                break;
        }
    }.bind(this);

    var now = new Date().getTime();             // присваиваем now время от 01.01.1970....
    setInterval(function(){                     // выполняй этот код каждый (разница во времени обращений) милисек
        var n = new Date().getTime();
        this.tick(n - now);                     // минимальный шаг выполняется с макс возможной частотой
        this.draw();                            // как только запустился тик, сразу отрисовывай
        now = n;
    }.bind(this), 0);
}

Game.prototype.tick = function (ms) {           // описываем что происходит на минимальном шаге
    this.player1.tick(ms);                      // выполни шаг для всех объектов
    this.player2.tick(ms);
    this.ball.tick(ms);
    if (this.ball.x < 10) {                     // проверяем не вылетели ли за левый край экрана
        if (Math.abs(this.ball.y - this.player1.y) < 30) {          // проверяем не столкнулись ли с игроком
            this.ball.velox = -this.ball.velox;                     // если столкнулись то меняем вектор скорости по иксу
        } else {
            this.ball.start();                                      // иначе начать все сначала
        }
    }
    if (this.ball.x > 490) {                                    // сейм шит хиар
        if (Math.abs(this.ball.y - this.player2.y) < 30) {
            this.ball.velox = -this.ball.velox;
        } else{
            this.ball.start();
        }
    }

    if (this.ball.y < 10 || this.ball.y > 490) {                    // если столкнулись с верхней или нижней границей
        this.ball.veloy = -this.ball.veloy;                         // смени вектор по игрику
    }

}


Game.prototype.draw = function() {                                      // описываем как отрисовывать объекты
    var canvas = document.getElementById("canvas");                     // получаем канвас из html
    var ctx = canvas.getContext("2d");                                  // получаем контекст в котором хотим рисовать (контекст рисования в 2д)
    ctx.clearRect(0, 0, 500, 500);                                      // очищаем экран
    this.player1.draw(ctx, 0);                                          // отрисовываем 1-го игрока
    this.player2.draw(ctx, 500);
    this.ball.draw(ctx);
}



