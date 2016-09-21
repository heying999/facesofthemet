var bubbles = [];
//var faces[];
var facesAsia = [];
var facesAfrica = [];
var facesEurope = [];
var facesSouthAmrica = [];
var logo;
var h1;
var logo;
var pAsia;
var pAfrica;
var pEurope;
var pSouthAmrica;
var p1;
var faceAsia;
var faceAfrica;
var faceEurope;
var faceSouthAmrica;
var titelAsia;
var titelAfrica;
var titelEurope;
var titelSouthAmrica;
var titelAll;
var x;
var y;
var choice = 0; //


function preload() {
  for (var a = 0; a < 30; a++) {
    facesAsia[a] = loadImage('images/face/face' + a +'_asia' + '.png');
  }
  for (var b = 0; b < 30; b++) {
    facesAfrica[b] = loadImage('images/face/face' + b + '_africa'+ '.png');
  }
  for (var c = 0; c < 30; c++) {
    facesEurope[c] = loadImage('images/face/face' + c + '_europe' + '.png');
  }
  for (var d = 0; d < 30; d++) {
    facesSouthAmrica[d] = loadImage('images/face/face' + (d + 91) + '.png');
  }


}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); //
  cnv.mousePressed(CNVmp);
  p1 = createA("http://www.metmuseum.org/connections/masks", ">>> Link to Connection Masks");
  //p1.style("font-family", "monospace");
  p1.style("font-family", "Helvetica");
  p1.style("color", "#AFAFAF");
  p1.style("font-size", "11pt");
  p1.style("padding", "1px");
  p1.position(windowWidth - 230, 40);
  //p1.hide();

  pAsia = createP('Asian');
  pAsia.style("font-family", "monospace");
  pAsia.style("color", "#FFFFFF");
  pAsia.style("font-size", "12pt");

  pAfrica = createP('African');
  pAfrica.style("font-family", "monospace");
  pAfrica.style("color", "#FFFFFF");
  pAfrica.style("font-size", "12pt");

  pEurope = createP('European');
  pEurope.style("font-family", "monospace");
  pEurope.style("color", "#FFFFFF");
  pEurope.style("font-size", "12pt");
  
  pSouthAmrica = createP('South American');
  pSouthAmrica.style("font-family", "monospace");
  pSouthAmrica.style("color", "#FFFFFF");
  pSouthAmrica.style("font-size", "12pt");

  titelAsia = createP('Asian');
  titelAsia.style("font-family", "Helvetica");
  titelAsia.style("color", "#000000");
  titelAsia.style("font-size", "13pt");
  titelAsia.position(windowWidth - 300, 25);

  titelAfrica = createP('African /');
  titelAfrica.style("font-family", "Helvetica");
  titelAfrica.style("color", "#000000");
  titelAfrica.style("font-size", "13pt");
  titelAfrica.position(windowWidth - 375, 25);

  titelEurope = createP('European /');
  titelEurope.style("font-family", "Helvetica");
  titelEurope.style("color", "#000000");
  titelEurope.style("font-size", "13pt");
  titelEurope.position(windowWidth - 465, 25);
  
  titelSouthAmrica = createP('South American /');
  titelSouthAmrica.style("font-family", "Helvetica");
  titelSouthAmrica.style("color", "#000000");
  titelSouthAmrica.style("font-size", "13pt");
  titelSouthAmrica.position(windowWidth - 603, 25);

  // titelAll = createP('Home /');
  // titelAll.style("font-family", "Helvetica");
  // titelAll.style("color", "#FFFFFF");
  // titelAll.style("font-size", "13pt");
  // titelAll.position(windowWidth - 505, 25);
  // titelAll.mousePressed(homePage);

  // logo = createImg('logo_01.png');
  // logo.position(30, 30);
  faceAsia = createImg('images/face/face25_asia.png');
  faceAsia.size(83, 135);
  faceAsia.mousePressed(chooseAsia);

  faceAfrica = createImg('images/face/face7_africa.png');
  faceAfrica.size(110, 110);
  faceAfrica.mousePressed(chooseAfrica);

  faceEurope = createImg('images/face/face7_europe.png');
  faceEurope.size(110, 117);
  faceEurope.mousePressed(chooseEurope);
  
  faceSouthAmrica = createImg('images/face/face92.png');
  faceSouthAmrica.size(110, 130);
  faceSouthAmrica.mousePressed(chooseSouthAmrica);
  


}

function chooseAsia() {
  pAsia.hide();
  pAfrica.hide();
  pEurope.hide();
  pSouthAmrica.hide();
  titelAsia.style("color", "#FFFFFF");
  titelAfrica.style("color", "#777777");
  titelEurope.style("color", "#777777");
  titelSouthAmrica.style("color", "#777777");
  faceAsia.hide();
  faceAfrica.hide();
  faceEurope.hide();
  faceSouthAmrica.hide();
  choice = 1;
  // alert("qqqq");
}

function chooseAfrica() {
  pAsia.hide();
  pAfrica.hide();
  pEurope.hide();
  pSouthAmrica.hide();
  titelAsia.style("color", "#777777");
  titelAfrica.style("color", "#FFFFFF");
  titelEurope.style("color", "#777777");
  titelSouthAmrica.style("color", "#777777");
  faceAsia.hide();
  faceAfrica.hide();
  faceEurope.hide();
  faceSouthAmrica.hide();
  //p1.show();
  choice = 2;
}

function chooseEurope() {
  pAsia.hide();
  pAfrica.hide();
  pEurope.hide();
  pSouthAmrica.hide();
  titelAsia.style("color", "#777777");
  titelAfrica.style("color", "#777777");
  titelEurope.style("color", "#FFFFFF");
  titelSouthAmrica.style("color", "#777777");
  faceAsia.hide();
  faceAfrica.hide();
  faceEurope.hide();
  faceSouthAmrica.hide();
  //p1.show();
  choice = 3;
}

function chooseSouthAmrica() {
  pAsia.hide();
  pAfrica.hide();
  pEurope.hide();
  pSouthAmrica.hide();
  titelAsia.style("color", "#777777");
  titelAfrica.style("color", "#777777");
  titelEurope.style("color", "#777777");
  titelSouthAmrica.style("color", "#FFFFFF");
  faceAsia.hide();
  faceAfrica.hide();
  faceEurope.hide();
  faceSouthAmrica.hide();
  //p1.show();
  choice = 4;
}

// function touchMoved() {
//   // pAsia.hide();
//   // faceAsia.hide();
//   // p1.show();
//   var r = floor(random(0, facesAsia.length));
//   var b = new Bubble(mouseX, mouseY, facesAsia[r]);
//   bubbles.push(b);

//   return false;
// }

function draw() {
  clear();
  //background(0);

  x = windowWidth / 6 + random(-1, 1);
  y = windowHeight / 2 + random(-1, 1);
  pAsia.position(x + 25, y + 80);
  pAfrica.position(x + windowWidth / 5 + 22, y + 80);
  pEurope.position(x + (windowWidth / 5) * 2 + 18, y + 80);
  pSouthAmrica.position(x + (windowWidth / 5) * 3 - 8, y + 80);

  faceAsia.position(x + 10, y - 55);
  faceAfrica.position(x + windowWidth / 5, y - 40);
  faceEurope.position(x + (windowWidth / 5) * 2, y - 55);
  faceSouthAmrica.position(x + (windowWidth / 5) * 3, y - 55);

  for (var i = 0; i <= bubbles.length - 1; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }

}

function CNVmp() {
  if (choice == 0) return;
  if (choice == 1) {
    var r1 = floor(random(0, facesAsia.length));
    var b1 = new Bubble(windowWidth / 2, windowHeight / 2, facesAsia[r1]);
    //var b1 = new Bubble(mouseX, mouseY, facesAsia[r1]);
    bubbles.push(b1);
  }
  if (choice == 2) {
    var r2 = floor(random(0, facesAfrica.length));
    var b2 = new Bubble(windowWidth / 2, windowHeight / 2, facesAfrica[r2]);
    bubbles.push(b2);
  }
  if (choice == 3) {
    var r3 = floor(random(0, facesEurope.length));
    var b3 = new Bubble(windowWidth / 2, windowHeight / 2, facesEurope[r3]);
    bubbles.push(b3);
  }
    if (choice == 4) {
    var r4 = floor(random(0, facesSouthAmrica.length));
    var b4 = new Bubble(windowWidth / 2, windowHeight / 2, facesSouthAmrica[r4]);
    bubbles.push(b4);
  }


}