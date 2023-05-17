export class DrawObjects {
    img;
    imgCache = {};
    buttonX = 120;
    buttonY = 350;
    buttonWidth = 150;
    buttonHeight = 50;
    buttons = [];
    constructor(ctx, width, height, canvas) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.mobile = this.checkIfMobile();
    }

    draw(ctx) {
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imgCache[path] = image;
        });
    }

    drawButtons() {
        let cornerRadius = 5;
        let buttonColor = '#4CAF50';
        let textColor = 'white';
        this.buttons.forEach(btn => {
            // Create button with curves
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
        if (this.isLandscapeMode()) {
            document.getElementById('warn').classList.add('d-none');
        } else if (!this.mobile) {
            document.getElementById('warn').classList.add('d-none');
        } else {
            document.getElementById('warn').classList.remove('d-none');
        }
    }

    iterateThroughButtons(e) {
        this.buttons.forEach(btn => {
            this.buttonClick(e, btn)
        });
    }

    /**
     * Checks if the touch event was inside a button.
     * If this is the case then it will be responded to.
     * @param {object} event - Touch event 
     * @param {Array} btn - Button Array
     */
    buttonClick(event, btn) {
        let canvas = document.getElementById('canvas1');
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        let mouseX = (event.clientX - rect.left) * scaleX;
        let mouseY = (event.clientY - rect.top) * scaleY;

        // Check if the click is inside the button
        if (mouseX > btn.x && mouseX < btn.x + this.buttonWidth &&
            mouseY > btn.y && mouseY < btn.y + this.buttonHeight) {
            switch (btn.name) {
                case 'Start Game':
                    this.startGame = true;
                    break;
                case 'Info':
                    this.showInfo = true;
                    break;
                case 'Home':
                    this.startPage = true;
                    break;
                default:
                    break;
            }
        }
    }

}