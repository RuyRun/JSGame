export class UI {
    constructor(game) {
        this.game = game;
        this.fontColor = 'black';
        this.font = 'bold 30px Helvetica';
    }
    draw(ctx) {
        // show score
        ctx.font = this.font;
        ctx.fillStyle = this.fontColor;
        ctx.textAlign = 'left';
        ctx.fillText('Score ' + this.game.score, 20, 50);
        // show Timer
        ctx.font = '24px Helvetica';
        ctx.fillText('Time: ' + (this.game.maxGameTime / 1000).toFixed(1), 20, 80);
        // Player heathStats
        ctx.font = '24px Helvetica';
        ctx.fillText('Heath: ' + this.game.playerHeath, 20, 110);
    }   
}