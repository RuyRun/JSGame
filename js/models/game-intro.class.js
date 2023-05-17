import { DrawObjects } from "./draw-objects.class.js";
export class GameIntro extends DrawObjects {
    constructor(ctx, width, height, canvas) {
        super(ctx, width, height, canvas);
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.startGame = false;
        this.showInfo = false;
        this.image = 'assets/background/background-start.png';
        this.loadImage(this.image);
        this.buttons = [
            {
                x: (1100 / 2) - 150,
                y: 350,
                name: 'Start Game'
            },
            {
                x: (1100 / 2) + 20,
                y: 350,
                name: 'Info'
            }
        ];
        canvas.addEventListener('click', e => {
            this.iterateThroughButtons(e);
        });
        setInterval(() => {
            this.checkLandscape()
        }, 200);
    }

    draw() {
        // Bg-Image
        this.ctx.drawImage(this.img, 0, 0, 1100, 500);
        //Background vom Text
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.fillRect(this.width / 3, (this.height / 3), 380, 240)
        this.ctx.strokeRect(this.width / 3, (this.height / 3), 380, 240)
        //text wird gezeichnet
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'black';
        this.ctx.font = '24px Helvetica';
        this.ctx.fillText('Welcome To', this.width / 2, (this.height / 2) - 50);
        this.ctx.font = '30px Helvetica';
        this.ctx.fillText('Alien Zapper', this.width / 2, (this.height / 2));
        this.drawButtons();
    }
}