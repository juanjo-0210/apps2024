import { Scene } from "phaser";
import { loadZone } from "../Utils";


export class Spaceship extends Scene {
    constructor() {
        super('Spaceship');
    }


    create () {
        this.add.image(0, 0, "spaceship").setOrigin(0);
        loadZone(this, 160, 180, 240, 360, 'Monster')
        loadZone(this, 540, 180, 240, 360, 'Home')
    }

    update () {

    }
}