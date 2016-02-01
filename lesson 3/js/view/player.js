(function() {
    function Player(game) {
        this.game = game;

        this.element = document.createElement('div');
        this.element.setAttribute('class', 'player');
        this.game.element.appendChild(this.element);
    }
    window.Game.View.Player = Player;
})();