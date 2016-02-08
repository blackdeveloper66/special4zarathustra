(function() {
    function Game() {
        this.player = new window.Game.Model.Player();
    }

    Game.prototype.tick = function(ms) {
        this.player.tick(ms);
    };

    window.Game.Model.Game = Game;
})();