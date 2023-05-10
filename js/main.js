import { Player } from "./models/player.class.js";
import { Background } from "./models/background.class.js";

window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 85;
            this.speed = 0;
            this.background = new Background(this);
            this.player = new Player(this);
            
        }

        update() {
            this.background.update();
            this.player.update();
        }

        draw(context) {
            this.background.draw(context);
            this.player.drawImage(context);
        }
    }
    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});