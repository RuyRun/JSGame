
class Layer {
    constructor(game, width, height, speedModi, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModi = speedModi;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        if (this.x < - this.width) {
            this.x = 0;
        } else {
            this.x -= this.game.speed * this.speedModi;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.helperPosition = 80;
        this.bg6 = new Image();
        this.bg6.src = 'assets/background/6.png';
        this.bg5 = new Image();
        this.bg5.src = 'assets/background/5.png';
        this.bg4 = new Image();
        this.bg4.src = 'assets/background/4.png';
        this.bg3 = new Image();
        this.bg3.src = 'assets/background/3.png';
        this.bg2 = new Image();
        this.bg2.src = 'assets/background/2.png';
        this.bg1 = new Image();
        this.bg1.src = 'assets/background/1.png';
        this.layer1 = new Layer(this.game, this.width, this.height - this.helperPosition, 0, this.bg1);
        this.layer2 = new Layer(this.game, this.width, this.height - this.helperPosition, 0.5, this.bg2);
        this.layer3 = new Layer(this.game, this.width, this.height - this.helperPosition, 1, this.bg3);
        this.layer4 = new Layer(this.game, this.width, this.height - this.helperPosition, 1, this.bg4);
        this.layer5 = new Layer(this.game, this.width, this.height - this.helperPosition, 2, this.bg5);
        this.layer6 = new Layer(this.game, this.width, this.height, 2, this.bg6);
        this.backgroundLayers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5, this.layer6];
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(ctx) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(ctx);
        })
    }

}