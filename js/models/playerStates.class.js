import { Fire } from "./particles.class.js";

const states = {
    IDLE: 0,
    RUNNING: 1,
    JUMPING: 2,
    ATTAC: 3,
    HIT: 4,
}

class State {
    constructor(state, game) {
        this.state = state;
        this.game = game;
    }
}
export class Idle extends State {
    constructor(game) {
        super('IDLE', game);
    }
    enter() {
        this.game.player.waiting();
    }
    handleInput(input) {
        if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.game.player.setState(states.RUNNING, 1);
        } else if (input.includes('ArrowUp')) {
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes('a')) {
            this.game.player.setState(states.ATTAC, 2);
        }
    }
}
export class Running extends State {
    constructor(game) {
        super('RUNNING', game);
    }
    enter() {
        this.game.player.run();

    }
    handleInput(input) {
        
        if (input.includes('ArrowUp')) {
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.length == 0) {
            this.game.player.setState(states.IDLE, 0);
        } else if (input.includes('a')) {
            this.game.player.setState(states.ATTAC, 2);
        }
    }
}
export class Jumping extends State {
    constructor(game) {
        super('JUMPING', game);
    }
    enter() {
        if (this.game.player.onGround()) {
            this.game.player.speedY -= 25;
        }
        this.game.player.jump();

    }
    handleInput(input) {
        if (this.game.player.onGround()) {
            this.game.player.setState(states.IDLE, 0);
        } else if (input.includes('a')) {
            this.game.player.setState(states.ATTAC, 2);
        }
    }
}


export class Attac extends State {
    constructor(game) {
        super('ATTAC', game);
    }
    enter() {
        this.game.player.attac();
        
    }
    handleInput(input) {
        this.game.particles.push(new Fire(this.game, this.game.player.x + this.game.player.width * 0.7, this.game.player.y * 1.12)); 
        if (!input.includes('a')) {
            this.game.player.setState(states.RUNNING, 1);
        } else if (input.length == 0) {
            this.game.player.setState(states.IDLE, 0);
        }
    }
}

export class Hit extends State {
    constructor(game) {
        super('HIT', game);
    }
    enter() {
        this.game.player.hit();
    }
    handleInput(input) {
        if (this.game.player.count >= this.game.player.hitImage.length) {
            this.game.player.setState(states.RUNNING, 1);
        } else if (this.game.player.count >= this.game.player.hitImage.length && input.length == 0) {
            this.game.player.setState(states.IDLE, 0);
        }
    }
}