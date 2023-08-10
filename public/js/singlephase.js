import MainScene from "./MainScene.js";

const config = {
    with: 320,
    height: 320,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
};
new Phaser.Game(config);