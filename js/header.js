var drops = [];
var satellites = [];

function setup(){
  var sketch = createCanvas(windowWidth, 600);
  sketch.parent('sketch');
  background(0);
  colorMode(HSB);
  for (let i = 0 ; i < 9 ; i++){
    satellites.push(new Satellite(random(width), random(height), random(4,6), random(0.5, 1)));
  }
}

function draw(){
  background(0);
  drops.push(new Drop(mouseX, mouseY))
  for (let i = 0; i < drops.length ; i ++){
    drop = drops[i];
    if (drop.lifespan >= 0){
      drop.update();
      drop.show();
    }
  }
  for (let i = 0; i < satellites.length ; i ++){
    var sat = satellites[i];
    sat.update();
    sat.show();
  }

}

function Drop(x,y){
  this.pos = createVector(x,y)
  this.lifespan = 1
}

Drop.prototype.update = function(){
  this.lifespan -= 0.02
}

Drop.prototype.show = function(){
  let radius = map(this.lifespan, 1, 0, 30, 0)
  let hue = map(this.pos.x, 0, windowWidth, 0, 255)
  noStroke();
  fill(hue,100,100,this.lifespan);
  ellipse(this.pos.x, this.pos.y, radius)
}

function Satellite(x,y, speed, force){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.maxSpeed = speed;
  this.maxForce = force;
}

Satellite.prototype.update = function(){
   var target = createVector(mouseX, mouseY)
   var desire = target.sub(this.pos);
   var steer = desire.sub(this.vel);
   steer.limit(this.maxForce * 2);
   this.vel.add(steer);
   this.vel.setMag(this.maxSpeed);
   this.pos.add(this.vel);
}

Satellite.prototype.show = function(){
  noFill();
  stroke(255);
  strokeWeight(2)
  ellipse(this.pos.x, this.pos.y, 10)
}

setInterval(function(){
  satellites.push(new Satellite(random(width), random(height), random(4,6), random(0.5, 1)));
}, 2000)
