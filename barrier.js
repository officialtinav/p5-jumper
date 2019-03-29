    
    
    function barrier() {
      this.x = w;
      this.y = 0;
      this.gravity = -0.9; //the force of gravity
      this.lift = -10; //opposing the force of gravity
      this.velocity = 0; //velocity of player
      
      this.show = function() {
        fill(color('white'));
        rect(this.x,this.y,50,120);
      }

      
      this.update = function() {
        this.velocity += this.gravity; //gravity applied when not jumping
        this.x += this.velocity;
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
    }
  
