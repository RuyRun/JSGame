import { MovableObject } from "./movable-objects.class.js";
export class CollisionAnimation extends MovableObject {
    cloudsImage = [
        'assets/clouds/cloud_shape5_5.png',
        'assets/clouds/cloud_shape5_4.png',
        'assets/clouds/cloud_shape5_3.png',
        'assets/clouds/cloud_shape5_2.png',
        'assets/clouds/cloud_shape5_1.png',
    ];

    constructor(game, x, y) {
        super();
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = x - this.width * 0.5;
        this.y = y - this.width * 0.5;
        this.bild = 'assets/clouds/cloud_shape5_5.png';
        this.loadImages(this.cloudsImage);
        this.loadImage(this.bild);
        this.canDelete = false
        this.draw(this.game.ctx);
        this.fps = 35;
        this.frameIntervall = 1000/this.fps;
        this.frameTimer = 0;
    }

    drawImage(ctx) {
        this.loadImage(this.bild);
        this.draw(ctx)
    }

    update(deltaTime) {
        if(this.frameTimer > this.frameIntervall){
            this.collisonAnimationFrame(this.cloudsImage)
            this.count ++;
            this.frameTimer = 0;
        }else {
            this.frameTimer += deltaTime;
        }
        if(this.count >= this.cloudsImage.length){
            this.canDelete = true;
        }
        this.x -= this.game.speed;
    }
}