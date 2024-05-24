import { Scene } from "phaser";


export class Home extends Scene{

    constructor() {
        super('Home')
    }

    create () {
        this.add.image(0,0, "home").setOrigin(0)
    }
}