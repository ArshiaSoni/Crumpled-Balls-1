class Paper{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, r, options )
        this.radius = r
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        fill ("lightpink")
        circle(pos.x, pos.y, this.radius*2)
    }
}