(function() {
    function Game(model, element) {
        this.model = model;

        this.element = element.getElementById('game');
        this.player = new window.Game.View.Player(this, this.model.player);
    }

    Game.prototype.tick = function(ms) {
        this.player.tick(ms);
    };

    window.Game.View.Game = Game;
})();