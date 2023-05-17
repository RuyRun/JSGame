export class Fire {
    constructor(game, x, y) {
        this.game = game;
        this.canDelete = false;
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
        this.x += this.speedX + this.game.player.speed;
        this.y += this.speedY;
        this.size *= 0.95;
        if (this.size < 0.5) {
            this.canDelete = true;
        }
    }
    drawImage(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}