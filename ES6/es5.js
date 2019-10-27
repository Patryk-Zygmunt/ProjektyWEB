class Brick{

    constructor(x,y,graphic,width,height,type,live){
        this.x = x;
        this.y = y
        this.graphic = graphic
        this.width = width
        this.height = height
        this.type = type
        this.live = live
    }

    print(){
        console.log(`${this.x} ${this.y} ${this.graphic} ${this.width} ${this.height} ${this.type} ${this.live}`)
    }

    init(){
        console.log("Dodano planszę")
    }


}

class BrickBlue extends Brick{
    constructor(x,y,width,height,type){
        super(x,y,width,height,type)
        this.graphic = 'blue.png'
        this.live = 10
    }
}


class BrickRed extends Brick{
    constructor(x,y,width,height,type){
        super(x,y,width,height,type)
        this.graphic = 'red.png'
        this.live = 15
    }
}

class BrickGreen extends Brick{
    constructor(x,y,width,height,type){
        super(x,y,width,height,type)
        this.graphic = 'green.png'
        this.live = 20
    }
}

class BrickAnim extends Brick{
    constructor(x,y,width,height,type,speed){
        super(x,y,graphic,width,height,type,live)
        this.speed = speed
    }

    moveHorizontal(){
        console.log("poruszam się posiomo z szybkoscia " + this.speed)
    }


}