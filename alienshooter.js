console.log("%c t01_create_sprite", "color: blue;");

/*******************************************************/
// variables()
/*******************************************************/

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 200;
let bullets = []

/*******************************************************/
// setup()
/*******************************************************/

function preload() {
imgPlayer = loadImage('/images/player.png');
}





function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);

    wallLH  = new Sprite(0, SCREEN_HEIGHT/2, 8, SCREEN_HEIGHT , 's');
    wallLH.color = 'lightblue';
    WallLH = noStroke()
    WallLH.bounciness = 0;
    
    wallTop = new Sprite(SCREEN_WIDTH/2, 0,SCREEN_WIDTH, 8, 's');
    wallTop.color = 'lightblue';
    WallTop = noStroke()
    WallTop.bounciness = 0;
    
    wallBot = new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT , SCREEN_WIDTH, 8, 's');
    wallBot.color = 'lightblue';
    WallBot = noStroke()
    WallBot.bounciness = 0;
 
 
 
 
 
 //P5.play website//
    player = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT/2, 50, 'd');
    player.color = 'green';
    player.rotation = 0;
    player.bounciness = 0;
 
    player.addImage(imgPlayer);
    imgPlayer.resize(100, 100);
 
 
 
 
 // Keyboard Movement-Up and Down //
document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowLeft') {
player.vel.x = -3;
    // Set sprite's velocity to the left

  }

 else if 
(event.code === 'ArrowRight')  player.vel.x = 3;
else if 
(event.code === 'ArrowUp') player.vel.y = -3;
else if 
(event.code === 'ArrowDown')  player.vel.y = 3;


});



document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowLeft') {
player.vel.x = 0;
    // Set sprite's velocity to 0

  }

 else if 
(event.code === 'ArrowRight')  player.vel.x = 0;
else if 
(event.code === 'ArrowUp')  player.vel.y = 0;
else if 
(event.code === 'ArrowDown')  player.vel.y = 0;



});



}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 background("lightblue");
}
