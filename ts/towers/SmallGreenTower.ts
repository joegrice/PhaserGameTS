class SmallGreenTower extends Tower {

    constructor(game: Phaser.Game, x: number, y: number, bullets: Phaser.Group) {
        super(game, x, y, bullets);
        this.key = "smallgreentower";
        this.loadTexture("smallgreentower");

        this.healthVal = GlobalState.SmallGreenTowerState.healthVal;
        this.bulletSpeed = GlobalState.SmallGreenTowerState.bulletSpeed;
    }

    startFiring(): void {
        let fireEvent: Phaser.TimerEvent = this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.fire, this);
        this.fireLoops.push(fireEvent);
    }
}