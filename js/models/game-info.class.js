export class GameInformation {
    buttonX = 120;
    buttonY = 350;
    buttonWidth = 150;
    buttonHeight = 50;
    image = new Image();
    buttons = [
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
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.startGame = false;
        this.startPage = false;
        this.image.src = 'assets/background/background-start.png';
        this.mobile = this.checkIfMobile();
        this.canvas.addEventListener('click', e => {
            this.iterateThroughButtons(e);
        });
        setInterval(() => {
            this.checkLandscape()
        }, 200);
    }

    checkIfMobile() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            // the user is using a mobile device, so redirect to the mobile version of the website
            return true;
        } else {
            return false;
        }
    }
    isLandscapeMode() {
        return Math.abs(window.orientation) === 90;
    }

    // Beispielaufruf
    checkLandscape() {
        if (this.isLandscapeMode() && this.mobile) {
            document.getElementById('warn').classList.add('d-none');
        } else if (!this.mobile) {
            document.getElementById('warn').classList.add('d-none');
        } else {
            document.getElementById('warn').classList.remove('d-none');
        }
    }
    drawText() {
        this.ctx.drawImage(this.image, 0, 0, 1100, 500);
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
    }
    drawBtns() {
        this.gameButtons.forEach(btn => {
            this.drawButton(btn.image, this.ctx, btn.x, btn.y)
        })
        this.drawButtons();
    }

    // Schaltfläche zeichnen
    drawButtons() {
        let cornerRadius = 5;
        let buttonColor = '#4CAF50';
        let textColor = 'white';
        this.buttons.forEach(btn => {
            this.ctx.fillStyle = buttonColor;
            this.ctx.beginPath();
            this.ctx.moveTo(btn.x + cornerRadius, btn.y);
            this.ctx.arcTo(btn.x + this.buttonWidth, btn.y, btn.x + this.buttonWidth, btn.y + this.buttonHeight, cornerRadius);
            this.ctx.arcTo(btn.x + this.buttonWidth, btn.y + this.buttonHeight, btn.x, btn.y + this.buttonHeight, cornerRadius);
            this.ctx.arcTo(btn.x, btn.y + this.buttonHeight, btn.x, btn.y, cornerRadius);
            this.ctx.arcTo(btn.x, btn.y, btn.x + this.buttonWidth, btn.y, cornerRadius);
            this.ctx.closePath();
            this.ctx.fill();
            // Button-Text
            this.ctx.font = '20px Arial';
            this.ctx.fillStyle = textColor;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(btn.name, btn.x + this.buttonWidth / 2, btn.y + this.buttonHeight / 2);
        })
    }
    drawButton(imageSrc, ctx, buttonX, buttonY) {
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

    iterateThroughButtons(e) {
        this.buttons.forEach(btn => {
            this.buttonClick(e, btn)
        });
        this.gameButtons.forEach(btn => {
            this.buttonClick(e, btn);
        });
    }

    buttonClick(event, btn) {
        let canvas = document.getElementById('canvas1');
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        let mouseX = (event.clientX - rect.left) * scaleX;
        let mouseY = (event.clientY - rect.top) * scaleY;

        // Überprüfen, ob Klick innerhalb der Schaltfläche liegt
        if (mouseX > btn.x && mouseX < btn.x + this.buttonWidth &&
            mouseY > btn.y && mouseY < btn.y + this.buttonHeight) {
            if (btn.name == 'Start Game') {
                this.startGame = true;
            } else if (btn.name === 'Home') {
                this.startPage = true;
            } else if (btn.name == 'fullscreen') {
                console.log('Fullscreen');
                this.toggleFullscreen();
            }
        }
    }
    // Funktion zum Wechseln in den Vollbildmodus
    toggleFullscreen() {
        const test = document.getElementById('canvas1'); // Ersetze 'meinCanvas' durch die tatsächliche ID deines Canvas-Elements
        if (test.requestFullscreen) {
            test.requestFullscreen();
        } else if (test.mozRequestFullScreen) { // Firefox
            test.mozRequestFullScreen();
        } else if (test.webkitRequestFullscreen) { // Chrome, Safari und Opera
            test.webkitRequestFullscreen();
        } else if (test.msRequestFullscreen) { // Internet Explorer
            test.msRequestFullscreen();
        }
    }
}