import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.add.image(0, 0, "back").setOrigin(0)
        
        this.createSprite();
    }

    createSprite(){

        const bugs = ['caterpillar', 'ant', 'bee'];
	    const random = Math.floor(Math.random()*bugs.length);
	    const spriteName = bugs[random];
        console.log(spriteName)
         const obj = this.physics.add.sprite(0,100, spriteName);
         obj.setVelocity(200,0)
         //obj.play('caterpillarWalk');


        



        obj.play(spriteName + 'Walk');
    }
}
