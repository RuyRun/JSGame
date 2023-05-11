export class UI {
    constructor(game) {
        this.game = game;
        this.fontColor = 'black';
        this.font = 'bold 30px Helvetica';
    }
    draw(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.fontColor;
        ctx.textAlign = 'left';
        ctx.fillText('Score ' + this.game.score, 20, 50);
    }
}