import { MovableObject } from "./movable-objects.class.js";
import { Idle, Running, Jumping, Attac, Hit } from "./playerStates.class.js";
import { CollisionAnimation } from "./collisonAnimation.class.js";

export class Player extends MovableObject {
    idle = [
        'assets/char/00_idle/skeleton-00_idle_00.png',
        'assets/char/00_idle/skeleton-00_idle_01.png',
        'assets/char/00_idle/skeleton-00_idle_02.png',
        'assets/char/00_idle/skeleton-00_idle_03.png',
        'assets/char/00_idle/skeleton-00_idle_04.png',
        'assets/char/00_idle/skeleton-00_idle_05.png',
        'assets/char/00_idle/skeleton-00_idle_06.png',
        'assets/char/00_idle/skeleton-00_idle_07.png',
        'assets/char/00_idle/skeleton-00_idle_08.png',
        'assets/char/00_idle/skeleton-00_idle_09.png',
        'assets/char/00_idle/skeleton-00_idle_10.png',
        'assets/char/00_idle/skeleton-00_idle_11.png',
        'assets/char/00_idle/skeleton-00_idle_12.png',
        'assets/char/00_idle/skeleton-00_idle_13.png',
        'assets/char/00_idle/skeleton-00_idle_14.png',
        'assets/char/00_idle/skeleton-00_idle_15.png',
        'assets/char/00_idle/skeleton-00_idle_16.png',
        'assets/char/00_idle/skeleton-00_idle_17.png',
        'assets/char/00_idle/skeleton-00_idle_18.png',
        'assets/char/00_idle/skeleton-00_idle_19.png',
        'assets/char/00_idle/skeleton-00_idle_20.png',
    ];

    running = [
        'assets/char/01_run_01start/skeleton-01_run_01start_00.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_01.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_02.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_03.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_04.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_05.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_06.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_07.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_08.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_09.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_10.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_11.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_12.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_13.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_14.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_15.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_16.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_17.png',
        'assets/char/01_run_01start/skeleton-01_run_01start_18.png',
    ];

    jumping = [
        'assets/char/02_jump_01start/skeleton-02_jump_01start_00.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_01.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_02.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_03.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_04.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_05.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_06.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_07.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_08.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_09.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_10.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_00.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_01.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_02.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_03.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_04.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_05.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_06.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_07.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_08.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_09.png',
        'assets/char/02_jump_01start/skeleton-02_jump_01start_10.png',
    ];

    attacImage = [
        'assets/char/04_punch/skeleton-04_punch_00.png',
        'assets/char/04_punch/skeleton-04_punch_01.png',
        'assets/char/04_punch/skeleton-04_punch_02.png',
        'assets/char/04_punch/skeleton-04_punch_03.png',
        'assets/char/04_punch/skeleton-04_punch_04.png',
        'assets/char/04_punch/skeleton-04_punch_05.png',
        'assets/char/04_punch/skeleton-04_punch_06.png',
        'assets/char/04_punch/skeleton-04_punch_07.png',
        'assets/char/04_punch/skeleton-04_punch_08.png',
        'assets/char/04_punch/skeleton-04_punch_09.png',
        'assets/char/04_punch/skeleton-04_punch_00.png',
        'assets/char/04_punch/skeleton-04_punch_01.png',
        'assets/char/04_punch/skeleton-04_punch_02.png',
        'assets/char/04_punch/skeleton-04_punch_03.png',
        'assets/char/04_punch/skeleton-04_punch_04.png',
        'assets/char/04_punch/skeleton-04_punch_05.png',
        'assets/char/04_punch/skeleton-04_punch_06.png',
        'assets/char/04_punch/skeleton-04_punch_07.png',
        'assets/char/04_punch/skeleton-04_punch_08.png',
        'assets/char/04_punch/skeleton-04_punch_09.png',
    ];

    hitImage = [
        'assets/char/03_ko/skeleton-03_ko_00.png',
        'assets/char/03_ko/skeleton-03_ko_01.png',
        'assets/char/03_ko/skeleton-03_ko_02.png',
        'assets/char/03_ko/skeleton-03_ko_03.png',
        'assets/char/03_ko/skeleton-03_ko_04.png',
        'assets/char/03_ko/skeleton-03_ko_05.png',
        'assets/char/03_ko/skeleton-03_ko_06.png',
        'assets/char/03_ko/skeleton-03_ko_07.png',
        'assets/char/03_ko/skeleton-03_ko_08.png',
        'assets/char/03_ko/skeleton-03_ko_09.png',
        'assets/char/03_ko/skeleton-03_ko_10.png',
        'assets/char/03_ko/skeleton-03_ko_11.png',
        'assets/char/03_ko/skeleton-03_ko_12.png',
        'assets/char/03_ko/skeleton-03_ko_13.png',
        'assets/char/03_ko/skeleton-03_ko_14.png',
        'assets/char/03_ko/skeleton-03_ko_15.png',
        'assets/char/03_ko/skeleton-03_ko_16.png',
        'assets/char/03_ko/skeleton-03_ko_17.png',
        'assets/char/03_ko/skeleton-03_ko_18.png',
        'assets/char/03_ko/skeleton-03_ko_19.png',
        'assets/char/03_ko/skeleton-03_ko_20.png',
        'assets/char/03_ko/skeleton-03_ko_21.png',
        'assets/char/03_ko/skeleton-03_ko_22.png',
        'assets/char/03_ko/skeleton-03_ko_23.png',
        'assets/char/03_ko/skeleton-03_ko_24.png',
        'assets/char/03_ko/skeleton-03_ko_25.png',
        'assets/char/03_ko/skeleton-03_ko_26.png',
        'assets/char/03_ko/skeleton-03_ko_27.png',
        'assets/char/03_ko/skeleton-03_ko_28.png',
        'assets/char/03_ko/skeleton-03_ko_29.png',
        'assets/char/03_ko/skeleton-03_ko_30.png',
        'assets/char/03_ko/skeleton-03_ko_31.png',
        'assets/char/03_ko/skeleton-03_ko_32.png',
        'assets/char/03_ko/skeleton-03_ko_33.png',
        'assets/char/03_ko/skeleton-03_ko_34.png',
        'assets/char/03_ko/skeleton-03_ko_35.png',
        'assets/char/03_ko/skeleton-03_ko_36.png',
        'assets/char/03_ko/skeleton-03_ko_37.png',
        'assets/char/03_ko/skeleton-03_ko_38.png',
        'assets/char/03_ko/skeleton-03_ko_39.png',
        'assets/char/03_ko/skeleton-03_ko_40.png',
    ];

    count = 0;

    constructor(game) {
        super();
        this.loadImages(this.running);
        this.loadImages(this.jumping);
        this.loadImages(this.idle);
        this.loadImages(this.attacImage);
        this.loadImages(this.hitImage);
        this.game = game;
        this.bild = 'assets/char/00_idle/skeleton-00_idle_00.png';
        this.width = 80;
        this.height = 80;
        this.x = 0;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.speed = 0;
        this.maxSpeed = 3;
        this.speedY = 0;
        this.gravity = 1;
        this.states = [new Idle(this.game), new Running(this.game), new Jumping(this.game), new Attac(this.game), new Hit(this.game)];
        this.heathStats = 10;
        this.animateImage = this.idle;
        this.newTimer = 0;
        this.timer = 1000;
    }

    update(deltaTime) {
        this.newTimer = deltaTime;
        this.checkCollision();
        this.currentState.handleInput(this.keys);
        //horizontal movement
        this.x += this.speed;
        if (this.keys.includes('ArrowRight')) {
            this.speed = this.maxSpeed;
        } else if (this.keys.includes('ArrowLeft')) {
            this.speed = -this.maxSpeed;
        } else this.speed = 0;

        // Cant't go out of the Canvas
        if (this.x < 0) {
            this.x = 0
        } else if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width;
        }
        //vertical movement
        this.y += this.speedY;
        if (!this.onGround()) {
            this.speedY += this.gravity;
        } else this.speedY = 0;
        this.playAnimation(this.animateImage)
    }

    drawImage(ctx) {
        this.loadImage(this.bild);
        this.draw(ctx)
    }

    setState(state, speed) {
        this.currentState = this.states[state];
        this.game.speed = speed;
        this.currentState.enter();
    }

    run() {
        this.animateImage = this.running;
    }

    waiting() {
        this.animateImage = this.idle;
    }

    jump() {
        this.animateImage = this.jumping;
    }

    attac() {
        this.animateImage = this.attacImage;
    }

    hit() {
        this.animateImage = this.hitImage;
    }

    checkCollision() {
        this.timer -= this.newTimer;
        this.game.enemies.forEach(enemy => {
            if (this.ifColliding(enemy)) {
                if (this.whenPlayerInAttac()) {
                    // Player is in Attac and kill the Enemies
                    this.game.collisionsAnimation.push(new CollisionAnimation(this.game, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
                    enemy.canDelete = true;
                    this.game.score++;
                } else {
                    // Player takes damage 
                    if (this.timer < 0) {
                        this.setState(4, 0);
                        this.timer = 800;
                        this.game.playerHeath--;
                        this.showScreenWhenPlayerDeath();
                    }
                }
            }
        });
    }
    /**
     * Check if the player colliding with an Enemie
     * @param {Array} enemy 
     * @returns boolean
     */
    ifColliding(enemy) {
        return enemy.x < this.x + this.width &&
            enemy.x + enemy.width > this.x &&
            enemy.y < this.y + this.height &&
            enemy.y + enemy.height > this.y
    }

    whenPlayerInAttac() {
        return this.currentState === this.states[3];
    }

    showScreenWhenPlayerDeath() {
        if (this.game.playerHeath <= 0) {
            this.game.gameOver = true;
        }
    }
}