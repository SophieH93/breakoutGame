import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  openingText = Phaser.GameObjects.Text;

  constructor() {
    super("game-scene");
    this.gameStarted = false;
  }

  preload() {
    this.load.image("paddle", "assets/paddle.png");
    this.load.image("ball", "assets/ball.png");
    this.load.image("brick1", "assets/brick1.png");
    this.load.image("brick2", "assets/brick2.png");
    this.load.image("brick3", "assets/brick3.png");
  }

  create() {
    this.player = this.createPlayer();
    this.ball = this.createBall();
    this.blueBricks = this.createBlueBricks();
    this.yellowBricks = this.createYellowBricks();
    this.redBricks = this.createRedBricks();

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.player.setImmovable(true);

    // Makes the ball bounce
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1, 1);
    // Makes the ball fall off the bottom
    this.physics.world.checkCollision.down = false;

    this.createOpeningText();
  }

  createOpeningText() {
    this.openingText = this.add.text(
      this.physics.world.bounds.width / 2,
      this.physics.world.bounds.height / 2,

      "Press SPACE to Start",
      {
        fontFamily: "Monaco, Courier, monospace",
        fontSize: "50px",
        fill: "#fff",
      }
    );
    this.openingText.setOrigin(0.5);
  }

  update() {
    if (this.isGameOver(this.physics.world)) {
    } else if (this.isWon()) {
    } else {
      if (!this.gameStarted) {
        this.player.body.setVelocityX(0);
        if (this.cursors.left.isDown) {
          this.player.body.setVelocityX(-350);
        } else if (this.cursors.right.isDown) {
          this.player.body.setVelocityX(350);
        }
        if (this.cursors.space.isDown) {
          this.gameStarted = true;
          this.ball.setVelocityY(-200);
          this.openingText.setVisible(false);
        }
      }
    }
  }

  isWon() {
    return (
      this.redBricks.countActive() +
        this.yellowBricks.countActive() +
        this.blueBricks.countActive() ==
      0
    );
  }

  isGameOver(world) {
    return this.ball.body.y > world.bounds.height;
  }

  createPlayer() {
    let player = this.physics.add.sprite(400, 600, "paddle");
    return player;
  }
  createBall() {
    let ball = this.physics.add.sprite(400, 565, "ball");
    return ball;
  }
  createBlueBricks() {
    let blueBricks = this.physics.add.group({
      key: "brick1",
      repeat: 9,
      imovable: true,
      setXY: { x: 80, y: 140, stepX: 70 },
    });
    return blueBricks;
  }
  createYellowBricks() {
    let yellowBricks = this.physics.add.group({
      key: "brick2",
      repeat: 9,
      imovable: true,
      setXY: { x: 80, y: 90, stepX: 70 },
    });
    return yellowBricks;
  }
  createRedBricks() {
    let redBricks = this.physics.add.group({
      key: "brick3",
      repeat: 9,
      imovable: true,
      setXY: { x: 80, y: 40, stepX: 70 },
    });
    return redBricks;
  }
}
