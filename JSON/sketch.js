let meData;
let birdData;
let canvas;
let birdOptions;
let colorsData;
let colorsCompanies;

function preload(){
meData = loadJSON("me.json");
birdData = loadJSON("birds.json");
colorsData = loadJSON("colors.json")
}

function setup() {

  canvas = createCanvas(windowWidth,windowHeight);
  background(0);
  //birdOptions = birdData.birds;
  colorsCompanies = colorsData.colors;
//print(birdOptions);

for(let i = 0; i<colorsCompanies. length; i++){
// let birdName = birdOptions[i].name;
// let birdWingspan = birdOptions[i].wingspan;
//   print(birdName);
//   createElement("h1",birdName);
//   print(birdWingspan);
//   createP(birdWingspan);
createP(colorsCompanies[i]);

}

  print(meData);
  print(meData.name);
  print(meData.age);
  print(meData.weight);
  print(meData.born);

fill(255);
textSize(45);

  text(meData.name, 40,50);
  text(meData.born, 40,90);

  ellipse(width/2,height/2, meData.age);
ellipse(width/2,height/2 + 100, meData.weight);
}

function draw() {
  // put drawing code here
}
