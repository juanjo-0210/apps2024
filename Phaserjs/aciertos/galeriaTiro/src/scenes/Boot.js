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

        
        this.load.image("back","./assets/images/back.jpg")

        this.load.spritesheet('caterpillar', "./assets/images/caterpillar.png", {
            frameWidth: 96,
            frameHeight: 192
	    });
        this.load.spritesheet("ant","./assets/images/ant.png", {
            frameWidth: 96,
            frameHeight: 192
	    });
        this.load.spritesheet("bee","./assets/images/bee.png", {
            frameWidth: 96,
            frameHeight: 192
	    });
    }

    create ()
    {
        this.anims.create({
            key: 'caterpillarWalk',
            frames: this.anims.generateFrameNumbers('caterpillar', {start: 0, end: 3}),
            frameRate: 7,
            repeat: -1,
	    });

        this.anims.create({
            key: 'antWalk',
            frames: this.anims.generateFrameNumbers('ant', {start: 0, end: 3}),
            frameRate: 7,
            repeat: -1,
	    });

        this.anims.create({
            key: 'beeWalk',
            frames: this.anims.generateFrameNumbers('bee', {start: 0, end: 3}),
            frameRate: 7,
            repeat: -1,
	    });

        this.scene.start('Game');
    }
}
