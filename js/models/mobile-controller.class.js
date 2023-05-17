export class MobileControlls {
    
    constructor(game) {
        this.game = game;
        this.buttons = [
            {
                image: 'assets/icons/fire.png',
                x: 50,
                y: 420,
                name: 'fire'
            },
            {
                image: 'assets/icons/arrow-up.png',
                x: 930,
                y: 350,
                name: 'up'
            },
            {
                image: 'assets/icons/arrow-left.png',
                x: 890,
                y: 425,
                name: 'left'
            },
            {
                image: 'assets/icons/arrow-right.png',
                x: 970,
                y: 425,
                name: 'right'
            }
        ];
    }
    draw(ctx) {
        this.buttons.forEach(btn => {
            this.drawButton(btn.image, ctx, btn.x, btn.y)
        });
    }

    drawButton(imageSrc, ctx, buttonX, buttonY) {
        let buttonWidth = 70;
        let buttonHeight = 70;
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
}