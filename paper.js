class paper{
constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.image=loadImage("paper.png");
this.body=Bodies.circle(x,y,40,options);

World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push ();
    translate (pos.x,pos.y);
    fill ("red");
    imageMode(CENTER)
    image(this.image,0,0,40,40)
    pop ()
}
}
