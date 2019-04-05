
    
    function jumper() {
      this.x = 50;
      this.y = 0;
      this.gravity = 0.5; //the force of gravity
      this.lift = -10; //opposing the force of gravity
      this.velocity = 0; //velocity of player
      
      this.show = function() {
        fill(color('red'));
        ellipse(this.x,this.y,50,50);
        
      }
      this.up = function() {
        this.velocity += this.lift; //jumping function
      }
      
       this.right = function() {
        this.x = -10;
      }
      
      this.update = function() {
        this.velocity += this.gravity; //gravity applied when not jumping
        this.y += this.velocity;
        this.velocity *= 0.8; //air resistance
        if (this.y > h) { //jumper hits the floor
          this.y = h;
          this.velocity = 0;
        }
        if (this.y < 0) { //jumper hit the ceiling
          this.y = 0;
          this.velocity = 0;
        }
      }
    } //object ends here
    
    function keyPressed() {
      if (keyCode === 32) {
        jumper.up();
      }
      
    /*   if (keyCode === 39) {
        jumper.right();
      }
      
      if (keyCode === 37) {
        jumper.left();
      } */
      
       /*if (keyCode === 39) {
        jumper.right();
      } */
      
     //make a move function to move the ball right (if key is down)
     
     if (keyIsDown(39)) { //right
        jumper.x += 5;
      }
      
     if (keyIsDown(37)) { //left
        jumper.x += -5;
      }
    }