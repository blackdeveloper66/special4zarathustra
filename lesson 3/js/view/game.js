(function() {
    function Game(model) {
        this.model = model;

        this.element = document.getElementById('game');
        this.player = new window.Game.View.Player(this, this.model.player);
    }

    Game.prototype.tick = function() {
        this.player.tick();
    };

    window.Game.View.Game = Game;
})();