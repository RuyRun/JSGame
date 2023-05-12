// import { DrawObjects } from "./draw-objects.class.js";
class Particles {
    constructor(game) {
        this.game = game;        
        this.canDelete = false;
    }
    update() {
        this.x += this.speedX + this.game.player.speed;
        this.y += this.speedY;
        this.size *= 0.95;
        if (this.size < 0.5) {
            this.canDelete = true;
        }        
    }
    
}

export class Fire extends Particles {
    constructor(game, x, y) {
        super(game);
        this.x = x;
        this.y = y;        
        this.size = Math.random() * 10 + 10;
        this.speedX = Math.random() * 2 + 3;
        this.speedY = Math.random() * 2 - 2;
        this.gravity = 0;
        this.image = new Image();
        this.bild = 'assets/particles/fire.png';
        this.image.src = this.bild;
    }

    update() {
        super.update();
        // this.gravity += 0.1;
        // this.y += this.gravity;
    }
    drawImage(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}