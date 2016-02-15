//TODO tests
//TODO Ref

(function() {
    function Shot(game, model, element) {
        this.game  = game;
        this.model = model;

        this.element = element.createElement('div');
        this.element.setAttribute('class', 'shot');
        this.game.element.appendChild(this.element);
    }

    Shot.prototype.tick = function() {
        var attrs = [];
        attrs.push('left:' + (this.model.x * 100) + '%');
        attrs.push('top:'  + (this.model.y * 100) + '%');
        attrs.push('transform:rotate(' + (this.model.angle + Math.PI / 2) + 'rad)');

        this.element.setAttribute('style', attrs.join(';'));
    };

    window.Game.View.Shot = Shot;
})();