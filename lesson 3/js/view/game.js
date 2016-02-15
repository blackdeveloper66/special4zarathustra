(function() {
    function Game(model, element) {
        this.model = model;

        this.element = element.getElementById('game');
        this.player = new window.Game.View.Player(this, this.model.player, element);
        this.shots  = [];

        //TODO Tests
        this.model.on('shot', function(shot) {
            var view = new window.Game.View.Shot(this, shot, element);
            this.shots.push(view);
        }.bind(this));
    }

    Game.prototype.tick = function(ms) {
        this.player.tick(ms);
        this.shots.forEach(function(item) { item.tick(ms); });
    };

    window.Game.View.Game = Game;
})();