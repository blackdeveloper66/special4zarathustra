// Контроллер - связующее звено между моделью и виювером

(function() {                                     //создаем модуль Игра по формуле (function() {})(); чтобы избежать исполнения всего содержимого в глобальном скоупе
    function Game() {                             //описываем содержимое модуля игра
        this.game = new window.Game.Model.Game();
        this.keyboard = new window.Game.Controller.Keyboard(this.game, document.body);
        this.view = new window.Game.View.Game(this.game);

        this.start();                             //есть какое-то начальное состояние
    }

    Game.prototype.start = function () {          //описываем начальное состояние модуля игра
        var now = new Date().getTime();           //задаем tick и говорим, что при старте все надо отрисовать
        setInterval(function () {
            var n = new Date().getTime();
            this.tick(n - now);
            now = n;
        }.bind(this), 0);                         //чтобы избежать исполнения в глобальном контексте исполнения, используй контекст this
    };

    Game.prototype.tick = function (ms) {
        this.game.player.tick(ms);
    };

    window.Game.Controller.Game = Game;                            //прокидываем данные для игры в глобальный скоуп исполнения
})();
