(function() {
    function Game() {
        this.player = new window.Game.Model.Player();
        this.shots  = [];

        window.Game.Events(this);
    }

    Game.prototype.tick = function(ms) {
        this.player.tick(ms);
        this.shots.forEach(function (item) { item.tick(ms); });
    };

    Game.prototype.shot = function() {
        var shot = new window.Game.Model.Shot(this.player.x, this.player.y, this.player.angle);
        this.shots.push(shot);

        this.dispatchEvent('shot', shot);
    };

    window.Game.Model.Game = Game;
})();