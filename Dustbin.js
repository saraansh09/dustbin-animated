class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 75;
        this.height = 75;
		World.add(world, this.body);
		this.image = loadImage("sprites/dustbingreen.png")
    }
    display() {
		var pos = this.body.position;
		pos.x = 900
		pos.y = 350
        rectMode(CENTER);
        fill("blue");
		imageMode(CENTER);
		image(this.image,pos.x,pos.y,this.width,this.height)
    }
}