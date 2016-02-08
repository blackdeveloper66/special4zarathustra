(function() {
    function Player(game, model) {
        this.game  = game;
        this.model = model;

        this.element = document.createElement('div');
        this.element.setAttribute('class', 'player');
        this.game.element.appendChild(this.element);
    }

    Player.prototype.tick = function() {
        var attrs = [];
        attrs.push('left:' + (this.model.x * 100) + '%');
        attrs.push('top:'  + (this.model.y * 100) + '%');
        attrs.push('transform:rotate(' + (this.model.angle + Math.PI / 2) + 'rad)');

        this.element.setAttribute('style', attrs.join(';'));
    };

    window.Game.View.Player = Player;
})();