import { Game } from "./game.class.js";
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

function endscreen(ctx, width, height, canvas, score, hits) {
    const endscreen = new Endscreen(ctx, width, height, canvas, score, hits);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        // Hintergrund löschen
        ctx.clearRect(0, 0, width, height);
        // Spiel-Intro zeichnen
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


function load(ctx, width, height, canvas) {
    const gameIntro = new GameIntro(ctx, width, height, canvas);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        // Hintergrund löschen
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Spiel-Intro zeichnen
        gameIntro.draw();
        // Überprüfen, ob das Spiel gestartet werden soll
        if (gameIntro.startGame) {
            startGame(ctx, width, height, canvas); // Funktion zum Starten des Spiels aufrufen
            cancelAnimationFrame(animationFrameId);
        } else if (gameIntro.showInfo) {
            loadInfo(ctx, width, height, canvas);
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId;
    }
    animate();
}
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

function loadInfo(ctx, width, height, canvas) {
    const gameInfo = new GameInformation(ctx, width, height, canvas);
    function animate() {
        const animationFrameId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Spiel-Intro zeichnen
        gameInfo.draw();
        // Überprüfen, ob das Spiel gestartet werden soll
        if (gameInfo.startGame) {
            startGame(ctx, width, height, canvas,gameInfo.startGame); // Funktion zum Starten des Spiels aufrufen
            cancelAnimationFrame(animationFrameId);
        } else if (gameInfo.startPage) {
            load(ctx, width, height, canvas);
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId;
    }
    animate();
}