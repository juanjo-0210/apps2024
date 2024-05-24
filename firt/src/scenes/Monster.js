import { Scene } from "phaser";


export class Monster extends Scene{
    constructor(){
        super('Monster')
    } 

    create (){
        this.add.image(0,0, "monster").setOrigin(0)
    } 
}