class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbin.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.wallThickness, {isStatic:true})
		this.leftBody=Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:true})
		this.rightBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:true})
        
        

		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftBody.position;
			var posRight=this.rightBody.position;

			
//Left
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
            pop()
            //Right

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			pop()
//Bottom
			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			angleMode(RADIANS)
            fill(255)
            //Image
			imageMode(CENTER);
			image(this.image, 0,-this.Height/2,this.Width, this.Height);
			pop()
			
	}

}