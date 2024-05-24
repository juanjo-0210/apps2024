import { Scene } from 'phaser';
import { loadZone } from '../Utils';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
       this.add.image(0, 0, "back").setOrigin(0);
       loadZone(this, 140, 10, 440, 400, 'Spaceship');
       loadZone(this, 590, 240, 370, 410, "Home")
    }

    
}
