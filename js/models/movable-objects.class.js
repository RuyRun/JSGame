import { DrawObjects } from "./draw-objects.class.js";
import { MobileControlls } from "./mobile-controller.class.js";
export class MovableObject extends DrawObjects {
    
    constructor() {
        super();
        this.keys = [];
        this.count = 0;
        this.frame = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.MobileControlls = new MobileControlls;
        this.buttons = this.MobileControlls.buttons;
        
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
        window.addEventListener('touchstart', e => {
            this.iterateThroughButtons(e)
        });
        window.addEventListener('touchend', e => {
            this.keys=[];
        })
    }
    iterateThroughButtons(e) {
        this.buttons.forEach(btn => {
            this.checkClick(e, btn);
        })

    }
    checkClick(e, btn) {
        let canvas = document.getElementById('canvas1');
        let buttonWidth = 70;
        let buttonHeight = 70;
        let buttonX = btn.x;
        let buttonY = btn.y;
        let touch = e.touches[0];
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        this.mouseX  = (touch.clientX - rect.left) * scaleX;
        this.mouseY  = (touch.clientY - rect.top) * scaleY;
        if (
            this.mouseX > buttonX &&
            this.mouseX < buttonX + buttonWidth &&
            this.mouseY > buttonY &&
            this.mouseY < buttonY + buttonHeight
        ) {
            if (btn.name == 'fire') {
                this.keys.push('a');
            }else if(btn.name == 'up') {
                this.keys.push('ArrowUp');
            }else if(btn.name == 'left') {
                this.keys.push('ArrowLeft');
            }else if(btn.name == 'right') {
                this.keys.push('ArrowRight');
            }
        }
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