export class PlayerDeathHtml {
    constructor(game) {
        this.game = game;
    }
    gameOverText() {
        document.getElementById('gameover').innerHTML = /*html */`
                <h2>Game Over!</h2>
                <p>Next time, you will definitely make it!</p>
                <p>Heath: ${this.game.playerHeath}</p>
                <p>Time: ${(this.game.maxGameTime / 1000).toFixed(1)}</p>
            `;
    }
}

export class GameOverHtml {
    constructor(game) {
        this.game = game;
    }
    winningGameOverText() {
        document.getElementById('gameover').innerHTML = /*html */`
                <h2>Game Over!</h2>
                <p>Yah, you are Grate!</p>
                <p>Score: ${this.game.score}</p>
                <p>Heath: ${this.game.playerHeath}</p>
            `;
    }

    losingGameOverText() {
        document.getElementById('gameover').innerHTML = /*html */`
                <h2>Game Over!</h2>
                <p>Next time you should get more than ${this.game.score} enemies!</p>
                <p>Better it would be over ${this.game.winningScore} enemies.</p>
                <p>Score: ${this.game.score}</p>
                <p>Heath: ${this.game.playerHeath}</p>
            `;
    }
}