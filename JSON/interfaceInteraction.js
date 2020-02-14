
  let canvas;
  let companiesMenu;// drop down menu
  let companiesData;//json data
  let companies; //stored the company names
// empty logo array
  let allLogos = [];

  function preload(){
    //loading the json and calling the loadImage function
    loadJSON("interfaceCompanies.json", loadImages);


  }
  //json data will be loaded in the data varialble
  function loadImages(companiesData){
    companies = companiesData.companies;
    for (let i=0; i<companies.length; i++){
      allLogos[i] = loadImage("images/" + i + ".png");
    }

    print(allLogos.length);
  }

  function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);


  companiesMenu = createSelect();


  //populating our menu with company names
  for (let i = 0; i<companies.length; i++){

    let companyName = companies[i].name;
    companiesMenu.option(companyName);
  }
  //when menu is changed, trigger companyColor function
  companiesMenu.changed(companyColor);
  print(companiesData);


  }

  function companyColor(){
    //
    for (let i = 0; i<companies.length; i++){

      let companyName = companies[i].name;

      let colorR = companies[i].r;
      let colorG = companies[i].g;
      let colorB = companies[i].b;
      let frequency = companies[i].frequency;
      print(frequency);
  //check and see what company is selected
  //give us its rgb value
      if(companiesMenu.value()== companies[i].name){
        background(colorR,colorG,colorB);
        print(frequency);

        for(let j= 0;  j< frequency; j++){
          let posX = random(width);
          let posY = random(height);
          image(allLogos[i],posX, posY,40,40);
        }
      }
    }


  }

  function draw(){


  }
