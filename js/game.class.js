import { Player } from "./models/player.class.js";
import { Background } from "./models/background.class.js";
import { FlyingEnemy } from "./models/enemies/flying-enemy.class.js";
import { GroundEnemy } from "./models/enemies/ground-enemy.class.js";
import { UI } from "./models/ui.class.js";
import { GameOverHtml } from "./models/generateHTML.class.js";
export class Game {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.groundMargin = 85;
        this.speed = 0;
        this.background = new Background(this);
        this.player = new Player(this);
        this.ui = new UI(this);
        this.enemies = [];
        this.collisions = [];
        this.particles = [];
        this.enemeyTimer = 0;
        this.enemyInterval = 1000;
        this.score = 0;
        this.ctx = ctx;
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
        this.maxGameTime = 10000;
        this.gameOver = false;
        this.playerHeath = 5;
        this.gameOverScreen = new GameOverHtml(this);
        this.winningScore = 5;
        this.intervall;
    }

    update(deltaTime) {
        this.checkMaxGameTime();
        this.background.update();
        this.player.update(deltaTime);
        this.handelEnemies(deltaTime);
        this.collisions.forEach((collision, index) => {
            collision.update(deltaTime);
            if (collision.canDelete) {
                this.collisions.splice(index, 1);
            }
        });
        //Particles
        this.particles.forEach((particle, index) => {
            particle.update();
            if (particle.canDelete) {
                this.particles.splice(index, 1);
            }
        });
    }

    draw(context) {
        this.background.draw(context);
        this.player.drawImage(context);
        this.enemies.forEach(enemy => {
            enemy.drawImage(context);
        });
        this.collisions.forEach(collision => {
            collision.drawImage(context);
        });
        this.ui.draw(context);
        this.checkMobile(context)
        this.particles.forEach(particle => {
            particle.drawImage(context);
        })
    }

    addEnemy() {
        if (this.speed > 0 && Math.random() < 0.3) {
            this.enemies.push(new GroundEnemy(this))
        }
        this.enemies.push(new FlyingEnemy(this));
    }

    handelEnemies(deltaTime) {
        if (this.enemeyTimer > this.enemyInterval) {
            this.addEnemy();
            this.enemeyTimer = 0;
        } else {
            this.enemeyTimer += deltaTime;
        }
        this.enemies.forEach(enemy => {
            enemy.update(deltaTime);
            if (enemy.canDelete) {
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        })
    }
    checkMaxGameTime() {
        this.maxGameTime -= 10;
        if (this.maxGameTime < 0) {
            this.gameOver = true;
        }
    }
    checkMobile(context) {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            // the user is using a mobile device, so redirect to the mobile version of the website
            this.player.MobileControlls.draw(context);
        }
    }

    // Funktion zum Wechseln in den Vollbildmodus
    toggleFullscreen() {
        const test = document.getElementById('canvas1');
        if (test.requestFullscreen) {
            test.requestFullscreen();
        } else if (test.mozRequestFullScreen) { // Firefox
            test.mozRequestFullScreen();
        } else if (test.webkitRequestFullscreen) { // Chrome, Safari und Opera
            test.webkitRequestFullscreen();
        } else if (test.msRequestFullscreen) { // Internet Explorer
            test.msRequestFullscreen();
        }
    }
}