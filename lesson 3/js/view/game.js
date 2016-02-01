(function() {
    function Game(model) {
        this.model = model;

        this.element = document.getElementById('game');
        this.player = new window.Game.View.Player(this);
    }
    Game.prototype.tick = function() {

    };
    window.Game.View.Game = Game;
})();