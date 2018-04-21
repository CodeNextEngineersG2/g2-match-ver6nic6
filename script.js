// image variables
var imageArray;
var backImage, boltImage, cloudImage, sunImage, moonImage, smileyImage, heartImage;
var transitionImage1, transitionImage2, transitionImage3;

// animation variables
var boltAnimation, cloudAnimation, sunAnimation, moonAnimation, smileyAnimation,
heartAnimation;

// sprite variables
var spriteArray;
var boltSprite1, boltSprite2;
var cloudSprite1, cloudSprite2;
var sunSprite1, sunSprite2;
var moonSprite1, moonSprite2;
var smileySprite1, smileySprite2;
var heartSprite1, heartSprite2;
var spriteWidth, spriteHeight;
var spriteX, spriteY;

// sound variables
var flipSound, matchSound, nopeSound, winSound, loseSound, bgMusic;

// game variables
var firstsprite, secondsprite;
var lives, matches;
var spritesActive;

// UI variables
var gameScreen;
var messageDisplay, livesDisplay;
var resetButton, musicButton;

function setup() {

  gameScreen = createCanvas(790,370);
  gameScreen.parent("#game-screen");

  spriteWidth = 120;
  spriteHeight = 168;
  spriteX = 70;
  spriteY = 95;

  imageArray = [backImage,boltImage,cloudImage,sunImage,moonImage,smileyImage,heartImage, transitionImage1, transitionImage2, transitionImage3];

  resizeImages();
  createSprites();
  spriteArray = [boltSprite1,boltSprite2,cloudSprite1,cloudSprite2,sunSprite1,sunSprite2,moonSprite1,moonSprite2,smileySprite1,smileySprite2,heartSprite1,heartSprite2];

  addAnimations();
  shuffle(spriteArray,true);
  placeSprites();
  spritesActive = true;


}



function loadImages() {

  backImage = loadImage("assets/img/back.png");
  boltImage = loadImage("assets/img/bolt.png");
  cloudImage = loadImage("assets/img/cloud.png");
  sunImage = loadImage("assets/img/sun.png");
  moonImage = loadImage("assets/img/moon.png");
  smileyImage = loadImage("assets/img/smiley.png");
  heartImage = loadImage("assets/img/heart.png");
  transitionImage1 = loadImage("assets/img/transition1.png");
  transitionImage2 = loadImage("assets/img/transition2.png");
  transitionImage3 = loadImage("assets/img/transition3.png");
}

function loadAnimations() {

  boltAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,boltImage);
  cloudAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,cloudImage);
  sunAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,sunImage);
  moonAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,moonImage);
  smileyAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,smileyImage);
  heartAnimation = loadAnimation(backImage,transitionImage1,transitionImage2,transitionImage3,heartImage);

}

function preload() {

  loadImages();
  loadAnimations();

}
function draw() {

  drawSprites();

}
function resizeImages() {

  for(var i = 0;i < imageArray.length;i++) {
    imageArray[i].resize(spriteWidth,spriteHeight);
  }

}

function createSprites() {

   heartSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   heartSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   boltSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   boltSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   cloudSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   cloudSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   sunSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   sunSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   moonSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   moonSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   smileySprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   smileySprite2 = createSprite(0, 0, spriteWidth, spriteHeight);

}

function addAnimations() {

  var animations = [boltAnimation,boltAnimation,cloudAnimation,cloudAnimation,sunAnimation,sunAnimation,heartAnimation,heartAnimation,moonAnimation,moonAnimation,smileyAnimation,smileyAnimation];
  for(i=0;i<spriteArray.length;i++){
    spriteArray[i].addAnimation("flip",animations[i]);
    spriteArray[i].animation.frameDelay = 10;
    spriteArray[i].animation.looping = false;
    spriteArray[i].animation.playing = false;
  }
}

function placeSprites() {

  for(i=0;i<spriteArray.length;i++){
    spriteArray[i].position.x = spriteX;
    spriteArray[i].position.y = spriteY;
    if( (i+1) % 6 == 0){
      spriteX = 70;
      spriteY += spriteHeight + 10;
    } else {
      spriteX += spriteWidth + 10;
    }
  }
} 

function activateSprite(s) {

  s.onMousePressed = function(){

    if(activateSprite == true & s.animations.getFrame()!= s.animations.getLastFrame()) {
      
      if(firstChoice == undefined){

        firstChoice = s;
        s.animations.goToframe(s.animations.getLastFrame())
      }
      
      else if(firstChoice!=s){

        secondChoice = s;
        s.animations.goToframe(s.animations.getLastFrame())
      }
    }
    }
}
/*
 * function loadSounds()
 * Works very similarly to loadImages(), only for music and sound effects.
 * Example:
   function loadSounds() {
     soundFormats("mp3", "wav");
     mySound = loadSound("assets/sound/sound.wav");
     myOtherSound = loadSound("assets/sound/otherSound.mp3");
   }
 */

/*
 * function init()
 * Initializes various elements of the game. Called in both setup() and
 * resetGame(). Helps reduce some of the bloat and redundancy in both of those
 * functions (DRY principle = "don't repeat yourself")
 */


/*
 * function resetGame()
 * Resets the game by calling init(), resetAllSprites(), then after a 1000
 * millisecond delay, calls shuffle(spriteArray, true), placeSprites(), and
 * sets spritesActive to true.
 */


/*
 * function toggleMusic()
 * Toggles the background music on and off.
 */

/*
 * function checkMatch()
 * Checks if spriteOne and spriteTwo match. If they do, the player is notified
 * in some way and those sprites remain "flipped". If they do not, the player is
 * notified in some way and, after a short delay, the sprites are returned to
 * face-down position. If the player has matched all sprites, they are notified
 * that they have won. IF the player has matched incorrectly too many times
 * (as indicated by the "lives" variable), they are notified that they have
 * lost and all sprites are simultaneously flipped face-up, revealing their
 * locations to the player. Win or lose, the player is given the option to
 * reset and try again with a fresh shuffle.
 */

/*
 * function flipAllSprites()
 * Flips all sprites in spriteArray to their last animation frame (i.e.,
 * "face-up").
 */

 /*
  * function resetAllSprites()
  * Does exactly the opposite of the above function!
  */
