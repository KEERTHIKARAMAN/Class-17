class Box
  {
    constructor(x,y,w,h)
    {
      this.x =x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
   setwidth(l)
   {
   this.w = 100;
   }

  }

  
