export class GameIntro {
    buttonX = 120;
    buttonY = 350;
    buttonWidth = 150;
    buttonHeight = 50;
    buttons = [
        {
            x: (1100 / 2) - 150,
            y: 350,
            name: 'Start'
        },
        {
            x: (1100 / 2) + 20,
            y: 350,
            name: 'Info'
        }
    ]
    image = new Image();
    constructor(ctx, width, height, canvas) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.startGame = false;
        this.showInfo = false;
        this.image.src = 'assets/background/background-start.png';
        this.mobile = this.checkIfMobile();
        this.canvas.addEventListener('click', e => {
            this.iterateThroughButtons(e);
        });
        setInterval(() => {
            this.checkLandscape()
        }, 200);
        this.start = false;

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

    checkLandscape() {
        if (this.isLandscapeMode() && this.mobile) {
            document.getElementById('warn').classList.add('d-none');
        } else if(!this.mobile){
            document.getElementById('warn').classList.add('d-none');
        }else {
            document.getElementById('warn').classList.remove('d-none');
            
        }
    }
    draw() {
        this.ctx.drawImage(this.image, 0, 0, 1100, 500);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.fillRect(this.width / 3,(this.height / 3),380,240)
        this.ctx.strokeRect(this.width / 3,(this.height / 3),380,240)
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle= 'black';
        this.ctx.font = '24px Helvetica';
        this.ctx.fillText('Welcome To', this.width / 2, (this.height / 2) - 50);
        this.ctx.font = '30px Helvetica';
        this.ctx.fillText('Alien Zapper', this.width / 2, (this.height / 2));
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

    iterateThroughButtons(e) {
        this.buttons.forEach(btn => {
            this.buttonClick(e, btn)
        })
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
            if (btn.name == 'Start') {
                this.startGame = true;
            } else if (btn.name == 'Info') {
                this.showInfo = true;
            }
        }
    }
}