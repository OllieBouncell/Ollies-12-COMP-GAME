console.log("%c t01_create_sprite", "color: blue;");

/*******************************************************/
// variables()
/*******************************************************/

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 300;;
const OBSTACLE_HEIGHT = 25;
const OBSTACLE_WIDTH = 25;

var spawnDist = 0;
var nextSpawn = 0;
let bullets = [];
var score = 0;
var lives = 3;
var screenSelector = "start"; 
/*******************************************************/
// setup()
/*******************************************************/

function preload() {
    imgPlayer = loadImage('/images/player.png');
}





function setup() {
    console.log("setup: ");
    
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    obstacles = new Group();
// invisble Border around the screen //
    wallLH  = new Sprite(0, SCREEN_HEIGHT/2, 8, SCREEN_HEIGHT , 's');
    wallLH.color = 'lightblue';
    WallLH = noStroke()
 
    
    wallTop = new Sprite(SCREEN_WIDTH/2, 0,SCREEN_WIDTH, 8, 's');
    wallTop.color = 'lightblue';
    WallTop = noStroke()
  
    
    wallBot = new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT , SCREEN_WIDTH, 8, 's ');
    wallBot.color = 'lightblue';
    WallBot = noStroke()
   
  //  the player and the image for the player //
    player = new Sprite(100, 100, 20, 'd');
    player.color = 'green';

    player.addImage(imgPlayer);
    imgPlayer.resize(100, 100);
 
 // where you press space to switch through screens //
document.addEventListener("keydown", 
    function(event) {
        if(screenSelector == "start"||screenSelector == "end"){
            screenSelector = "game"
            resetGame()
        }
    }); 

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
    player.vel.x = 0; // Set sprite's velocity to 0
    }

    else if 
    (event.code === 'ArrowRight')  player.vel.x = 0;
    else if 
    (event.code === 'ArrowUp')  player.vel.y = 0;
    else if 
    (event.code === 'ArrowDown')  player.vel.y = 0;

    obstacles.collides(player, playerHitAlien);

    bulletGroup = new Group();
    bulletGroup.collides(obstacle, bulletHitObstacle);

    });




    }
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 // Selects what function Screen to use when something happenes //
    if(screenSelector=="game"){
       gameScreen();
    if (lives <= 0) {
        screenSelector = "end";
        }
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="start"){
        startScreen();
    }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
    }
    
}



function keyPressed() {
// when a key is pressed the bullet is shot  //
  if (keyCode == 32)
        bullet = new Sprite( player.x + 50, player.y, 5, 'd');
    bullet.color = 'yellow';
    bullet.bounciness = 0;
    bullet.vel.x = 3;
    bulletGroup.add(bullet);
    bullet.life = 30;// life of how many frames the bullet lasts found on p5.play website

}


function newObstacle(){
// how obstacles spawan  //
    // Code from Geodash  //
    var screenY = random(15,200)
    obstacle = new Sprite(SCREEN_WIDTH, screenY, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("green");
    obstacle.vel.x = -5;
    
    obstacles.add(obstacle);
}




function bulletHitObstacle(bullet, obstacle) {
    // Remove bullet and obstacle and add score  //
    obstacle.remove();
    bullet.remove ();
    score ++;
}

function playerHitAlien (_player,alien) {
 // when player hits allien player loses life  //
    lives --;
    console.log("Lives");
 
 
 
 
}



// Main screen functions
function startScreen(){
 // Startscreen function the   //
    allSprites.visible = false;
    background("orange");
    textSize(24);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Infinity Assault ", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 90);
    textSize(18);
    text("Rules and How to Play", 50, 130);
    textSize(14);
    text("move with the arrow keys", 50, 160);
    textSize(14);
    text("shoot the ailens with the space key", 50, 190);
    textSize(12);
    text("your goal is to Shoot aliens, score high, avoid losing all three lives or you lose", 50, 230);
}






function gameScreen(){
    

 background("lightblue");
 player.rotation = 0;
 player.bounciness = 0;
 allSprites.visible = true;
 for (i = 0; i <lives; i++){
    rect(40 * i, 10, 35, 35);
  }
  fill(0);
    stroke(0);
    strokeWeight();
   textSize(32);
    text(score, 320, 40);
   if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,200);
    }
}

function endScreen(){
    background("orange");

    allSprites.visible = false;
    textSize(24);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died. Rest in peace, departed soul.", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    text("press any key to restart", 50, 150);
     
}

function resetGame(){
    score = 0;
    lives = 3;
    player.position.x = 100;
    player.position.y = 100;
    obstacle.removeSprites();
    bulletGroup.removeSprites();
    var spawnDist = 0;
    var nextSpawn = 0;
    gameScreen()  
 }
