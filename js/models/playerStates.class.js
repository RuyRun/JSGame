const states = {
    IDLE: 0,
    RUNNING: 1,
    JUMPING: 2,
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
            this.player.speedY -= 20;
        }
        this.player.jump();

    }
    handleInput(input) {
        if (this.player.onGround()) {
            this.player.setState(states.IDLE, 0);
        }
    }
}
