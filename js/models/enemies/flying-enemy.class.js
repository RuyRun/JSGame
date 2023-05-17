import { MovableObject } from "../movable-objects.class.js";
export class FlyingEnemy extends MovableObject {
    flyImage = [
        'assets/enemey/flying/skeleton-animation_00.png',
        'assets/enemey/flying/skeleton-animation_01.png',
        'assets/enemey/flying/skeleton-animation_02.png',
        'assets/enemey/flying/skeleton-animation_03.png',
        'assets/enemey/flying/skeleton-animation_04.png',
        'assets/enemey/flying/skeleton-animation_05.png',
        'assets/enemey/flying/skeleton-animation_06.png',
        'assets/enemey/flying/skeleton-animation_07.png',
        'assets/enemey/flying/skeleton-animation_08.png',
        'assets/enemey/flying/skeleton-animation_09.png',
        'assets/enemey/flying/skeleton-animation_10.png',
        'assets/enemey/flying/skeleton-animation_11.png',
        'assets/enemey/flying/skeleton-animation_12.png',
        'assets/enemey/flying/skeleton-animation_13.png',
        'assets/enemey/flying/skeleton-animation_14.png',
        'assets/enemey/flying/skeleton-animation_15.png',
        'assets/enemey/flying/skeleton-animation_16.png',
        'assets/enemey/flying/skeleton-animation_17.png',
        'assets/enemey/flying/skeleton-animation_18.png',
        'assets/enemey/flying/skeleton-animation_19.png',
    ];

    constructor(game) {
        super();
        this.loadImages(this.flyImage);
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * this.game.height * 0.5 ;
        this.speedX = Math.random() +3;
        this.speedY = 0;
        this.bild = 'assets/enemey/flying/skeleton-animation_19.png';
        this.canDelete = false;
        this.angel = 0;
        this.ranAngel = Math.random() *0.2+0.1;

    }

    update() {
        this.x -= this.speedX + this.game.speed;
        this.angel+=this.ranAngel;
        this.y += Math.sin(this.angel);
        this.playAnimation(this.flyImage);
        if(this.x + this.width < 0) {
            this.canDelete = true;
        }
    }

    drawImage(ctx) {
        this.loadImage(this.bild);
        this.draw(ctx)
    }
}