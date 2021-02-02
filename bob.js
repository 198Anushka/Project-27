class Bob {
    constructor(x,y){
      var options={
     isStatic:false,
     restitution:0.3,
     friction:0.2,
     density:1.0


      }
     this.body1=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;
     this.body2=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;
     this.body3=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;
     this.body4=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;
     this.body5=Bodies.circle(x,y,50);
     this.image = loadImage("sprites/paper.png");
     this.r=50;

     World.add(world, this.body1);
     World.add(world, this.body2);
     World.add(world, this.body3);
     World.add(world, this.body4);
     World.add(world, this.body5);
    }
  
    display() {
      var angle = this.body1.angle;
      push();
      translate(this.body1.position.x, this.body1.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body1);
      pop();

      var angle = this.body2.angle;
      push();
      translate(this.body2.position.x, this.body2.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body2);
      pop();

      var angle = this.body3.angle;
      push();
      translate(this.body3.position.x, this.body3.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body3);
      pop();

      var angle = this.body4.angle;
      push();
      translate(this.body4.position.x, this.body4.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body4);
      pop();

      var angle = this.body5.angle;
      push();
      translate(this.body5.position.x, this.body5.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(  this.body5);
      pop();



    
      
    }
  }
  