(function() {
    var VELOCITY       = 0.0001;
    var ANGLE_VELOCITY = Math.PI * 0.001;

    function Player() {
        this.x     = 0.5;
        this.y     = 0.5;
        this.angle = 0;
        this.state = {
            angle    : '',
            movement : ''
        };
    }

    Player.prototype.tick = function(ms) {
        move(this, ms);
        rotate(this, ms);
    };

    function move(player, ms) {
        if (player.state.movement != 'forward' && player.state.movement != 'backward') { return; }

        var dx = Math.abs(Math.cos(player.angle) * VELOCITY * ms);
        var dy = Math.abs(Math.sin(player.angle) * VELOCITY * ms);

        if (0 <= player.angle && player.angle < Math.PI / 2) { dx = dx; dy = -dy; }
        if (Math.PI / 2 <= player.angle && player.angle < Math.PI) { dx = -dx; dy = -dy; }
        if (Math.PI <= player.angle && player.angle < 3 / 2 * Math.PI) { dx = -dx; dy = dy; }
        if (3 / 2 * Math.PI <= player.angle && player.angle < 2 * Math.PI) { dx = dx; dy = dy; }

        player.x += (player.state.movement == 'forward' ? 1 : -1) * dx;
        player.y += (player.state.movement == 'forward' ? 1 : -1) * dy;

        if (player.x <= 0) { player.x = 0; }
        if (player.x >= 1) { player.x = 1; }
        if (player.y <= 0) { player.y = 0; }
        if (player.y >= 1) { player.y = 1; }
    }

    function rotate(player, ms) {
        if (player.state.angle != 'left' && player.state.angle != 'right') { return; }

        player.angle += (player.state.angle == 'left' ? 1 : -1) * ANGLE_VELOCITY * ms;

        while (player.angle < 0) { player.angle += Math.PI * 2; }
        while (player.angle > Math.PI * 2) { player.angle -= Math.PI * 2; }
    }

    window.Game.Model.Player = Player;
})();