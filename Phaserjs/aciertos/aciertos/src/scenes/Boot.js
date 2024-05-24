import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('back', './assets/images/back.jpg');
        this.load.image('face0', './assets/images/face0.png');
        this.load.image('face1', './assets/images/face1.png');
        this.load.image('face2', './assets/images/face2.png');
        this.load.image('face3', './assets/images/face3.png');
        this.load.image('face4', './assets/images/face4.png');
        this.load.image('face5', './assets/images/face5.png');
        this.load.image('face6', './assets/images/face6.png');
        this.load.image('lose', './assets/images/lose.jpg');
    }

    create ()
    {
        this.scene.start('Game');
    }
}
