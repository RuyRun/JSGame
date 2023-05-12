import { DrawObjects } from "./draw-objects.class.js";
export class MovableObject extends DrawObjects {
    constructor() {
        super();
        this.keys = [];
        this.count = 0;
        this.frame = 0;
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'a'
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'a') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
    onGround() {
        return this.y >= this.game.height - this.height - this.game.groundMargin;
    }
    /**
     * Animates the images
     * @param {Array} arr - Needs the image array to load
     */
    playAnimation(arr) {
        let path = arr[this.count];
        let arrLength = arr.length;
        if (this.count < arrLength) {
            this.bild = this.imgCache[path].src;
            this.count++
        } else this.count = 0
    }
    collisonAnimationFrame(arr) {
        let path = arr[this.count];
        let arrLength = arr.length;
        if (this.count < arrLength) {
            this.bild = this.imgCache[path].src;
        } 
    }
}