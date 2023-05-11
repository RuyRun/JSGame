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
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 85;
            this.speed = 0;
            this.background = new Background(this);
            this.player = new Player(this);
            this.ui = new UI(this);
            this.enemies = [];
            this.enemeyTimer = 0;
            this.enemyInterval = 1000;
            this.score = 0;            
        }

        update(deltaTime) {
            this.background.update();
            this.player.update();
            this.handelEnemies(deltaTime);
        }

        draw(context) {
            this.background.draw(context);
            this.player.drawImage(context);
            this.enemies.forEach(enemy => {
                enemy.drawImage(context);
            });
            this.ui.draw(context);
        }

        addEnemy() {
            if(this.speed > 0 && Math.random() < 0.3){
                this.enemies.push(new GroundEnemy(this))
            }
            this.enemies.push(new FlyingEnemy(this));
        }

        handelEnemies(deltaTime) {
            if(this.enemeyTimer > this.enemyInterval){
                this.addEnemy();
                this.enemeyTimer = 0;
            }else {
                this.enemeyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                if(enemy.canDelete){
                    this.enemies.splice(this.enemies.indexOf(enemy),1);
                }
            })
        }
    }
    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
    
});