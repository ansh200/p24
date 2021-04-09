class Paper {
   constructor(x,y,radius){
  var options={
      isStatic : false,
      restitution : 0.3,
      friction : 0.5,
      dencity  : 1.2
  }
   this.body = Bodies.circle(x,y,radius,options);
    //this.sides = sides;
    this.radius = radius;
    World.add(world,this.body);

   }
    display(){

        var pos = this.body. position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill ("red");
        ellipse (0,0,this.radius,this.radius);
        pop();
    }
  
}