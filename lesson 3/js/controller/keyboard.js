(function(){
    function Keyboard(game, emitter) {
        this.game    = game;
        this.emitter = emitter;

        emitter.onkeydown = this.onkeydown.bind(this);   //
        emitter.onkeyup   = this.onkeyup.bind(this);
    }

    Keyboard.prototype.onkeydown = function(event) {
        switch (event.keyCode) {
            case 38 :
                this.game.player.state.movement = 'forward';
                break;
            case 40 :
                this.game.player.state.movement = 'backward';
                break;
            case 37 :
                this.game.player.state.angle = 'left';
                break;
            case 39 :
                this.game.player.state.angle = 'right';
                break;
            case 32 :
                this.game.shot();
                break;
        }
    };

    Keyboard.prototype.onkeyup = function(event) {
        switch (event.keyCode) {
            case 38 :
                if (this.game.player.state.movement == 'forward') { this.game.player.state.movement = '' };
                break;
            case 40 :
                if (this.game.player.state.movement == 'backward') { this.game.player.state.movement = '' };
                break;
            case 37 :
                if (this.game.player.state.angle == 'left') { this.game.player.state.angle = '' };
                break;
            case 39 :
                if (this.game.player.state.angle == 'right') { this.game.player.state.angle = '' };
                break;
        }
    };

    Game.Controller.Keyboard = Keyboard;
})();