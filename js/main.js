import { Game } from "./models/game.class.js";
import { GameIntro } from "./models/game-intro.class.js";
import { GameInformation } from "./models/game-info.class.js";
import { Endscreen } from "./models/endscreen.class.js";

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1100;
    canvas.height = 500;    
    load(ctx, canvas.width, canvas.height, canvas);    
});
/**
  * Displays the end screen
 * @param {Object} ctx - Context
 * @param {Number} width - Canvas width
 * @param {Number} height - Canvas height
 * @param {Object} canvas - Canvasobject
 * @param {Number} playerHeath - Nums of live
 * @param {Number} score  - Score from Player
 */
function endscreen(ctx, width, height, canvas, playerHeath, score) {
    const endscreen = new Endscreen(ctx, width, height, canvas, playerHeath, score);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        // Delete background
        ctx.clearRect(0, 0, width, height);
        // Draw game Endscreen
        endscreen.draw();
        // Überprüfen, ob das Spiel gestartet werden soll
        if (endscreen.startGame) {
            startGame(ctx, width, height, canvas); // Funktion zum Starten des Spiels aufrufen
            cancelAnimationFrame(animationFrameId);
        } else if (endscreen.showInfo) {
            loadInfo(ctx, width, height, canvas);
            cancelAnimationFrame(animationFrameId);
        }        
        animationFrameId;
    }
    animate();
}

/**
 * Display the Game intro screen
 * @param {Object} ctx - Context
 * @param {Number} width - Canvas width
 * @param {Number} height - Canvas height
 * @param {Object} canvas - Canvasobject
 */
function load(ctx, width, height, canvas) {
    const gameIntro = new GameIntro(ctx, width, height, canvas);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        // Delete background
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw game intro
        gameIntro.draw();
        // Check if you want to start the game
        if (gameIntro.startGame) {
            startGame(ctx, width, height, canvas); // Call function to start the game
            cancelAnimationFrame(animationFrameId);
        } else if (gameIntro.showInfo) {
            loadInfo(ctx, width, height, canvas);
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId;
    }
    animate();
}
/**
 * Display the Game
 * @param {Object} ctx - Context
 * @param {Number} width - Canvas width
 * @param {Number} height - Canvas height
 * @param {Object} canvas - Canvasobject
 */
function startGame(ctx, width, height, canvas) {
    const game = new Game(width, height, ctx);
    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, width, height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) {
            requestAnimationFrame(animate);
        } else {
            setTimeout(() => {
                endscreen(ctx, width, height, canvas, game.playerHeath, game.score);
            }, 800);
        }
    }
    animate(0);
}
/**
 * Display the Gameinformations
 * @param {Object} ctx - Context
 * @param {Number} width - Canvas width
 * @param {Number} height - Canvas height
 * @param {Object} canvas - Canvasobject
 */
function loadInfo(ctx, width, height, canvas) {
    const gameInfo = new GameInformation(ctx, width, height, canvas);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        // Delete background
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw game intro
        gameInfo.draw();
        // Check if you want to start the game
        if (gameInfo.startGame) {
            startGame(ctx, width, height, canvas,gameInfo.startGame); // Call function to start the game
            cancelAnimationFrame(animationFrameId);
        } else if (gameInfo.startPage) {
            load(ctx, width, height, canvas);
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId;
    }
    animate();
}