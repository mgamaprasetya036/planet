class planet {
  constructor(dimensi, jarak, sudut, kecepatan){
    this.dimensi = dimensi;
    this.jarak = jarak;
    this.sudut = sudut;
    this.kecepatan = kecepatan;
  }
}

const matahari = new planet(40,0,0,0);
const bumi = new planet(10,75,1,1/3);
let rotasibintang = 1;


//tambahan
const merkurius = new planet(8,30,1,1)
const venus = new planet(11,50,1,1/2)
const mars = new planet(13,90,1,1/4)

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  
  matahariShow();
  bumiShow();
  merkuriusShow();
  venusShow();
  marsShow();

}

//Matahari
function matahariShow(){
  noStroke();
  fill(255,100,50);
  circle(matahari.jarak,matahari.jarak,matahari.dimensi);
}

//Bumi
function bumiShow(){
  push();
  
  //orbit
  strokeWeight(1,5);
  stroke('white');
  noFill();
  circle(0,0,212);
  
  //planet
  rotate(bumi.sudut);
  noStroke();
  fill('blue');
  circle(bumi.jarak,bumi.jarak,bumi.dimensi);
  bumi.sudut += bumi.kecepatan;
  
  //Bintang
  fill('white');
  translate(bumi.jarak,bumi.jarak);
  rotate(rotasibintang);
  circle(10,10,2);
  pop()
  rotasibintang += 1
}

//Merkurius
function merkuriusShow(){
  push();
  
  //orbit
  strokeWeight(1,5);
  stroke('white');
  noFill();
  circle(0,0,85);

  //planet
  rotate(merkurius.sudut);
  noStroke();
  fill('orange');
  circle(merkurius.jarak,merkurius.jarak,merkurius.dimensi);
  pop();
  merkurius.sudut += merkurius.kecepatan;
}

//Venus
function venusShow(){
  push();
  
  //orbit
  strokeWeight(1,5);
  stroke('white');
  noFill();
  circle(0,0,142);

  //planet
  rotate(venus.sudut);
  noStroke();
  fill('#937D64');
  circle(venus.jarak,venus.jarak,venus.dimensi);
  pop();  
  venus.sudut += venus.kecepatan;
}

//Mars
function marsShow(){
  push();
  
  //orbit
  strokeWeight(1,5);
  stroke('white');
  noFill();
  circle(0,0,254);

  //planet
  rotate(mars.sudut);
  noStroke();
  fill('red');
  circle(mars.jarak,mars.jarak,mars.dimensi);
  pop();
  mars.sudut += mars.kecepatan;
  
}