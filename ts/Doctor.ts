module Enemy {
    export class Doctor extends Enemy {
        constructor(game) {
            super(game);
            this.key = "enemy1";
            this.loadTexture("enemy1");
            this.scale.x = 0.75;        
            this.scale.y = 0.75;        
            this.animations.add('walk');
            this.animations.play('walk', 20, true);   
        }

        spawn(x, y) {
            this.stdReset(x, y);
            this.body.velocity.x = -25;
        }

        hit(bullet: Phaser.Bullet) {
            if (this.dying) {
                return;
            }

            bullet.kill();
            this.healthVal -= 10;          

            if (this.healthVal < 1) {
                this.dying = true;
                this.body.velocity = 0;
                //this.animations.play("enemy1death", 22, true);
                this.death();
            }

        }
    }
}