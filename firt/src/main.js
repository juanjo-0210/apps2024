import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { Home } from './scenes/Home';
import { MainMenu } from './scenes/MainMenu';
import { Monster } from './scenes/Monster';
import { Preloader } from './scenes/Preloader';
import { Spaceship } from './scenes/Spaceship';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
        Spaceship,
        Home,
        Monster
        
    ]
};

export default new Phaser.Game(config);
