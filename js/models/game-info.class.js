import { DrawObjects } from "./draw-objects.class.js";
export class GameInformation extends DrawObjects {
    navButtons = [
        {
            x: (1100 / 2) - 150,
            y: 400,
            name: 'Start Game'
        },
        {
            x: (1100 / 2) + 20,
            y: 400,
            name: 'Home'
        },
    ];

    gameButtons = [
        {
            image: 'assets/icons/fire.png',
            x: 50,
            y: 70,
            name: 'fire'
        },
        {
            image: 'assets/icons/arrow-up.png',
            x: 50,
            y: 140,
            name: 'up'
        },
        {
            image: 'assets/icons/arrow-left.png',
            x: 50,
            y: 210,
            name: 'left'
        },
        {
            image: 'assets/icons/arrow-right.png',
            x: 50,
            y: 280,
            name: 'right'
        },
        {
            image: 'assets/icons/a-solid.svg',
            x: 550,
            y: 70,
            name: 'up'
        },
        {
            image: 'assets/icons/arrow-up.png',
            x: 550,
            y: 140,
            name: 'up'
        },
        {
            image: 'assets/icons/arrow-left.png',
            x: 550,
            y: 210,
            name: 'left'
        },
        {
            image: 'assets/icons/arrow-right.png',
            x: 550,
            y: 280,
            name: 'right'
        },
        {
            image: 'assets/icons/expand-solid.svg',
            x: 990,
            y: 30,
            name: 'fullscreen'
        }
    ];

    constructor(ctx, width, height, canvas) {
        super(ctx, width, height, canvas);
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.startGame = false;
        this.startPage = false;
        this.loadImage('assets/background/background-start.png');
        this.buttons = this.navButtons;

        canvas.addEventListener('click', e => {
            this.iterateThroughButtons(e);
        });

        setInterval(() => {
            this.checkLandscape()
        }, 200);
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, 1100, 500);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.font = '32px Helvetica';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Mobile', 80, 50);
        this.ctx.fillText('____________', 120, 50);
        this.ctx.fillText('Pc', 580, 50);
        this.ctx.fillText('____________', 620, 50);
        this.ctx.font = '27px Helvetica';
        this.ctx.fillText('= FIRE', 150, 105);
        this.ctx.fillText('= JUMP', 155, 175);
        this.ctx.fillText('= WALK BACK', 200, 245);
        this.ctx.fillText('= GO FORWORD', 220, 315);
        this.ctx.fillText('= FIRE', 650, 100);
        this.ctx.fillText('= JUMP', 657, 170);
        this.ctx.fillText('= WALK BACK', 700, 240);
        this.ctx.fillText('= GO FORWORD', 720, 310);
        this.drawAllBtns();
    }
    drawAllBtns() {
        this.gameButtons.forEach(btn => {
            this.drawGameButtons(btn.image, this.ctx, btn.x, btn.y)
        })
        this.drawButtons();
    }

    drawGameButtons(imageSrc, ctx, buttonX, buttonY) {
        let buttonWidth = 50;
        let buttonHeight = 50;
        let cornerRadius = 5;
        let buttonColor = '#4CAF50';
        ctx.fillStyle = buttonColor;
        ctx.beginPath();
        ctx.moveTo(buttonX + cornerRadius, buttonY);
        ctx.arcTo(buttonX + buttonWidth, buttonY, buttonX + buttonWidth, buttonY + buttonHeight, cornerRadius);
        ctx.arcTo(buttonX + buttonWidth, buttonY + buttonHeight, buttonX, buttonY + buttonHeight, cornerRadius);
        ctx.arcTo(buttonX, buttonY + buttonHeight, buttonX, buttonY, cornerRadius);
        ctx.arcTo(buttonX, buttonY, buttonX + buttonWidth, buttonY, cornerRadius);
        ctx.closePath();
        ctx.fill();
        let image = new Image();
        image.src = imageSrc;
        var imageX = buttonX + (buttonWidth - (buttonWidth / 2)) / 2;
        var imageY = buttonY + (buttonHeight - (buttonHeight / 2)) / 2;
        ctx.drawImage(image, imageX, imageY, buttonWidth / 2, buttonHeight / 2);
    }

    /**
     * Function to switch to full screen mode
     */
    toggleFullscreen() {
        const test = document.getElementById('canvas1');
        if (test.requestFullscreen) {
            test.requestFullscreen();
        } else if (test.mozRequestFullScreen) { // Firefox
            test.mozRequestFullScreen();
        } else if (test.webkitRequestFullscreen) { // Chrome, Safari & Opera
            test.webkitRequestFullscreen();
        } else if (test.msRequestFullscreen) { // Internet Explorer
            test.msRequestFullscreen();
        }
    }
}