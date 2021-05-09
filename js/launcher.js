class launcher{
    constructor(bodyX, pointB){
        var options={
            bodyA: bodyX,
            pointB: pointB,
            lengh: 100,
            stiffness: 0.05
        }

        this.pointB = pointB

            this.launch = Matter.Constraint.create(options)
            World.add(world, this.launch)


    }

    fly(){
        this.launch.bodyA = null;
    }

    attach(body){
        this.launch.bodyA = body;
    }

    display(){
        if(this.launch.bodyA)
        {

        push();

            
        var pointA = this.launch.bodyA.position
        var pointB = this.pointB

        stroke("red")
        strokeWeight(10)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
 pop();       
    }

    }

}

