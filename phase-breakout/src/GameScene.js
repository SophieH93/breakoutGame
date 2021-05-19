import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
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
  }

  update() {}

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
