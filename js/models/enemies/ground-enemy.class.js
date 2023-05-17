import { MovableObject } from "../movable-objects.class.js";
export class GroundEnemy extends MovableObject {
    groundImage = [
        'assets/enemey/ground/idle/skeleton-idle_00.png',
        'assets/enemey/ground/idle/skeleton-idle_01.png',
        'assets/enemey/ground/idle/skeleton-idle_02.png',
        'assets/enemey/ground/idle/skeleton-idle_03.png',
        'assets/enemey/ground/idle/skeleton-idle_04.png',
        'assets/enemey/ground/idle/skeleton-idle_05.png',
        'assets/enemey/ground/idle/skeleton-idle_06.png',
        'assets/enemey/ground/idle/skeleton-idle_07.png',
        'assets/enemey/ground/idle/skeleton-idle_08.png',
        'assets/enemey/ground/idle/skeleton-idle_09.png',
        'assets/enemey/ground/idle/skeleton-idle_10.png',
        'assets/enemey/ground/idle/skeleton-idle_11.png',
        'assets/enemey/ground/idle/skeleton-idle_12.png',
        'assets/enemey/ground/idle/skeleton-idle_13.png',
        'assets/enemey/ground/idle/skeleton-idle_14.png',
        'assets/enemey/ground/idle/skeleton-idle_15.png',
        'assets/enemey/ground/idle/skeleton-idle_16.png',
    ];

    constructor(game) {
        super();
        this.loadImages(this.groundImage);
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width - 160;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.speedX = 0;
        this.speedY = 0;
        this.bild = 'assets/enemey/ground/idle/skeleton-idle_00.png';
        this.canDelete = false;
    }

    update() {      
        this.x -= this.speedX + this.game.speed; 
        this.playAnimation(this.groundImage);
    }
    
    drawImage(ctx) {
        this.loadImage(this.bild);
        this.draw(ctx)
    }
}