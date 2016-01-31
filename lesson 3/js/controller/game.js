(function() {
    function Game() {
        this.objects = [];

        this.start();
    }

    Game.prototype.start = function () {
        var now = new Date().getTime();
        setInterval(function () {
            var n = new Date().getTime();
            this.tick(n - now);
            this.draw();
            now = n;
        }.bind(this), 0);
    };

    Game.prototype.tick = function (ms) {
        this.objects.forEach(function(obj) { obj.tick(ms); });
    };

    window.Game = Game;
})();