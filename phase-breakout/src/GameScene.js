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
  }

  update() {}

  createPlayer() {
    let player = this.physics.add.sprite(400, 600, "paddle");
    return player;
  }
}
