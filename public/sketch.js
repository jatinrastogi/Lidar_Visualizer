let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let boundarySpacing = 20
let f = false;
function setup() {
    createCanvas(windowWidth-100, windowHeight-100);
    
    walls.push(new Boundary(boundarySpacing, boundarySpacing, width-boundarySpacing, boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, boundarySpacing, width-boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, height-boundarySpacing, boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(boundarySpacing, height-boundarySpacing, boundarySpacing, boundarySpacing));
    particle = new Particle();
}
function play(){
    var elem = document.getElementById("play");
    if(elem.value=="Play"){
        f=true;
        elem.value = "Stop";
    }
    else{
        f = false;
        elem.value = "Play";
    }
}
function clickbutton(event){
    console.log("hi");
}
function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    if(f==true){
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
    }
    

    xoff += 0.01;
    yoff += 0.01;
}
