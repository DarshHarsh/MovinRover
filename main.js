canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=95;
roverheight=100;
roverX=10;
roverY=10;
nasaimagesArray=["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630070503567C00_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630660503626E01_DXXX.jpg"
,"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631200503680E0C_DXXX.jpg"];
var randomno=Math.floor(Math.random()*4);
backroundimage=nasaimagesArray[randomno];
roverimage="rover.png";
function add(){
    backroundimageTag=new Image();
    backroundimageTag.onload=uploadbackround;
    backroundimageTag.src=backroundimage;

    roverimageTag=new Image();
    roverimageTag.onload=uploadrover;
    roverimageTag.src=roverimage;
} 
function uploadbackround(){
    ctx.drawImage(backroundimageTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(roverimageTag,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

 if (keypressed=='38'){
     up();
     console.log("up");
    
 }
 if (keypressed=='40'){
    down();
    console.log("down");
   
}
if (keypressed=='37'){
   left();
    console.log("left");
   
}
if (keypressed=='39'){
  right();
    console.log("right");
   
}
function up(){
  if (roverY>= 0){
   roverY = roverY -10;
   uploadbackround();
   uploadrover();
  }
}
function down(){
  if (roverY<= 500){
   roverY = roverY +10;
   uploadbackround();
   uploadrover();
  }
}
function left(){
  if (roverX>= 0){
   roverX = roverX -10;
   uploadbackround();
   uploadrover();
  }
}
function right(){
  if (roverX<= 700){
   roverX = roverX +10;
   uploadbackround();
   uploadrover();
  }
}
}