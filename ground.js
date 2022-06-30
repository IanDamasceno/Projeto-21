class Ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var ground_options={
            isStatic:true
        }
            
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
    }

    show(){
        var groundPos = this.body.position;
        push();
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(155); 
        rect(0,0,this.width,this.height);
        pop();

    }
}

