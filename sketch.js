var bg,bgImg,endImg,startImg;
var marioImg,marioRunningImg;
var odstacleImg1,obstacleImg2,obstacleImg3;

function preload(){

  bgImg = loadImage("background.jpg")
  endImg = loadImage("Endimage.jpg")
  startImg = loadImage("startimage.jpg")
  marioImg = loadImage("mario.jpg")
  marioRunningImg = loadImage("marioRunning.jpg")
  obstacleImg1 = loadImage("obstacle1.png")
  obstacleImg2 = loadImage("obstacle2.png")
  obstacleImg3 = loadImage("obstacle3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 3
  



}

function draw() {
  background(0); 




  
drawSprites();

}
