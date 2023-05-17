import { DrawObjects } from "./draw-objects.class.js";
export class Endscreen extends DrawObjects {
    navButtons = [
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

    constructor(ctx, width, height, canvas, heath, score) {
        super(ctx, width, height, canvas, heath, score);
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.score = score;
        this.heath = heath;
        this.startGame = false;
        this.showInfo = false;
        this.buttons = this.navButtons;
        this.image = 'assets/background/background-start.png';
        this.loadImage(this.image);

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
        //background from the text
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.fillRect(this.width / 3, (this.height / 3), 380, 240)
        this.ctx.strokeRect(this.width / 3, (this.height / 3), 380, 240)
        //draw text
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'black';
        this.ctx.font = '24px Helvetica';
        this.ctx.fillText('Game Over', this.width / 2, (this.height / 2) - 50);
        this.ctx.font = '30px Helvetica';
        this.answer();
        this.drawButtons();
    }

    answer() {
        if (this.heath <= 0) {
            this.ctx.fillText('You are DEAD! ', this.width / 2, (this.height / 2));
            this.ctx.font = '27px Helvetica';
            this.ctx.fillText('Next try, let\'s go! ', this.width / 2, (this.height / 2) + 50);
        } else if (this.score <= 0) {
            this.ctx.fillText('Next try to improve! ', this.width / 2, (this.height / 2));
        } else {
            this.ctx.fillText('You are grate! ', this.width / 2, (this.height / 2));
            this.ctx.fillText(`Score: ${this.score}`, this.width / 2, (this.height / 2) + 50);
        }
    }
}