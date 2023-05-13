import { Player } from "./models/player.class.js";
import { Background } from "./models/background.class.js";
import { FlyingEnemy } from "./models/enemys/flying-enemy.class.js";
import { GroundEnemy } from "./models/enemys/ground-enemy.class.js";
import { UI } from "./models/ui.class.js";

window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
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
            this.maxGameTime = 20000;
            this.gameOver = false;
            this.playerHeath = 5;
        }

        update(deltaTime) {
            this.maxGameTime -= deltaTime;
            if (this.maxGameTime< 0) {
                this.gameOver = true;
            }
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
            })
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
    }
    const game = new Game(canvas.width, canvas.height, ctx);
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) {
            requestAnimationFrame(animate);
        }else {
            setTimeout(() => {
                showScreen();
            }, 800);
        }
    }
    animate(0);
    function showScreen() {
        document.getElementById('gameover').classList.remove('d-none');
        document.getElementById('canvas1').classList.add('d-none');
    }
});