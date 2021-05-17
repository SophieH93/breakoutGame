import React, { useState, useEffect } from "react";
import Phaser from "Phaser";
import GameScene from "./GameScene";

function Breakout({ title, width, height, background }) {
  const [phaser, setPhaser] = useState(null);

  useEffect(() => {
    let _phaser = setPhaser(
      new Phaser.Game({
        type: Phaser.AUTO,
        height: height,
        Width: width,
        physics: {
          default: "arcade",
          arcade: {
            gravity: false,
          },
        },
        backgroundColor: background,
        parent: "phaser-parent",
        scene: GameScene,
      })
    );
    setPhaser(_phaser);
  }, [title, width, height, background]);

  return <div id="phaser-parent">{phaser}</div>;
}

export default Breakout;
