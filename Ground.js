class Ground {
   constructor(x,y,width,height){

    this .body = Bodies.rectangle(x,y,width,height,{isStatic:true})

    World.add(world, this.body);
}
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill(225,0,0);
       rect(pos.x,pos.y,width,20);

   }



}