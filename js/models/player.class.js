import { MovableObject } from "./movable-objects.class.js";
import { Idle, Running, Jumping} from "./playerStates.class.js";

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
    ]
    
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
    ]
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
    ]

    punsh = [
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
    ]
    count = 0;
    
    constructor(game) {
        super();
        this.loadImages(this.running);
        this.loadImages(this.jumping);
        this.loadImages(this.idle);
        this.loadImages(this.punsh);
        this.game = game;        
        this.bild = 'assets/char/00_idle/skeleton-00_idle_00.png';
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.speed = 0;
        this.maxSpeed = 5;
        this.speedY = 0;
        this.gravity = 1;
        this.states = [new Idle(this), new Running(this), new Jumping(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
        this.animateImage = this.idle
    }

    update() {
        this.currentState.handleInput(this.keys);
        //Horizontale bewegung
        this.x += this.speed;
        if (this.keys.includes('ArrowRight')) {
            this.speed = this.maxSpeed;
        } else if (this.keys.includes('ArrowLeft')) {
            this.speed = -this.maxSpeed;
        } else this.speed = 0;
        if(this.x < 0){
            this.x = 0
        }else if(this.x > this.game.width - this.width){
            this.x = this.game.width - this.width;
        }

        //Vertikale bewegung
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

    setState(state) {
        this.currentState = this.states[state];
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
}