class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.s = Constraint.create(options);
        World.add(world, this.s);
    }
fly(){
    this.s.bodyA=null;
}
    display(){
        if(this.s.bodyA){
        var pointA = this.s.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
