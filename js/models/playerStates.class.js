const states = {
    IDLE: 0,
    RUNNING: 1,
    JUMPING: 2,
    ATTAC: 3,
    HIT: 4,
}

class State {
    constructor(state) {
        this.state = state;
    }
}
export class Idle extends State {
    constructor(player) {
        super('IDLE');
        this.player = player;
    }
    enter() {
        this.player.waiting();
    }
    handleInput(input) {
        if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.player.setState(states.RUNNING, 1);
        } else if (input.includes('ArrowUp')) {
            this.player.setState(states.JUMPING, 1);
        } else if (input.includes('a')) {
            this.player.setState(states.ATTAC, 2);
        }
    }
}
export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;
    }
    enter() {
        this.player.run();

    }
    handleInput(input) {
        if (input.includes('ArrowUp')) {
            this.player.setState(states.JUMPING, 1);
        } else if (input.length == 0) {
            this.player.setState(states.IDLE, 0);
        } else if (input.includes('a')) {
            this.player.setState(states.ATTAC, 2);
        }
    }
}
export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;
    }
    enter() {
        if (this.player.onGround()) {
            this.player.speedY -= 25;
        }
        this.player.jump();

    }
    handleInput(input) {
        if (this.player.onGround()) {
            this.player.setState(states.IDLE, 0);
        } else if (input.includes('a')) {
            this.player.setState(states.ATTAC, 2);
        }
    }
}


export class Attac extends State {
    constructor(player) {
        super('ATTAC');
        this.player = player;
    }
    enter() {
        this.player.attac();

    }
    handleInput(input) {
        if (!input.includes('a')) {
            this.player.setState(states.RUNNING, 1);
        } else if (input.length == 0) {
            this.player.setState(states.IDLE, 0);
        }
    }
}

export class Hit extends State {
    constructor(player) {
        super('HIT');
        this.player = player;
    }
    enter() {
        this.player.hit();

    }
    handleInput(input) {
        if (this.player.count >= this.player.hitImage.length) {
            this.player.setState(states.RUNNING, 1);
        } else if (this.player.count >= this.player.hitImage.length && input.length == 0) {
            this.player.setState(states.IDLE, 0);
        }
    }
}