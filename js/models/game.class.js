import { Player } from "./player.class.js";
import { Background } from "./background.class.js";
import { FlyingEnemy } from "./enemies/flying-enemy.class.js";
import { GroundEnemy } from "./enemies/ground-enemy.class.js";
import { UI } from "./ui.class.js";
export class Game {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.groundMargin = 85;
        this.ctx = ctx;
        this.speed = 0;
        this.background = new Background(this);
        this.player = new Player(this);
        this.ui = new UI(this);
        this.enemies = [];
        this.collisionsAnimation = [];
        this.particles = [];
        this.enemeyTimer = 0;
        this.enemyInterval = 700;
        this.score = 0;
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
        this.maxGameTime = 20000;
        this.gameOver = false;
        this.playerHeath = 5;
        this.winningScore = 5;
        this.intervall;
    }

    update(deltaTime) {
        this.checkMaxGameTime();
        this.background.update();
        this.player.update(deltaTime);
        this.handelEnemies(deltaTime);
        this.handelCollisions(deltaTime);
        this.handelParticles();
    }

    draw(context) {
        this.background.draw(context);
        this.player.drawImage(context);
        this.drawEnemies(context);
        this.drawCollisionsAnimation(context);
        this.ui.draw(context);
        this.checkMobile(context)
        this.drawParticles(context);
    }

    addEnemy() {
        if (this.speed > 0 && Math.random() < 0.5) {
            this.enemies.push(new GroundEnemy(this))
        }
        this.enemies.push(new FlyingEnemy(this));
    }

    drawEnemies(context) {
        this.enemies.forEach(enemy => {
            enemy.drawImage(context);
        });
    }

    drawCollisionsAnimation(context) {
        this.collisionsAnimation.forEach(collision => {
            collision.drawImage(context);
        });
    }

    drawParticles(context) {
        this.particles.forEach(particle => {
            particle.drawImage(context);
        });
    }

    handelParticles() {
        this.particles.forEach((particle, index) => {
            particle.update();
            if (particle.canDelete) {
                this.particles.splice(index, 1);
            }
        });
    }

    handelCollisions(deltaTime) {
        this.collisionsAnimation.forEach((collision, index) => {
            collision.update(deltaTime);
            if (collision.canDelete) {
                this.collisionsAnimation.splice(index, 1);
            }
        });
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
        });
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
}