//Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random()* 8) + 3);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //resets position from enemy to move from left to right
    if (this.x > 520) {
        this.x = -50;
    this.speed = 100 + Math.floor(Math.random() * 228);
    }


    // collision player and enemies
    if (player.x < this.x + 90 && player.x + 90 > this.x && player.y < this.y + 50 && 50 + player.y > this.y) {
        player.x = 230;
        player.y = 425;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
   //this stops the player from moving out of wall boundaries
    if (this.y > 390) {
        this.y = 390;
    }

    if (this.x > 400) {                                                     
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }
   //when player reaches top of canvas and wins the game
    if (this.y < 0) {
        this.x = 230;
        this.y = 425;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player moving the keys
Player.prototype.handleInput = function(keyPress){
  if(keyPress === 'left' && this.x > 0){
    this.x -= 104;
  } else if (keyPress === 'right' && this.x < 410) {
    this.x += 104;
  } else if(keyPress === 'up' && this.y > 0){
    this.y -= 85;
  } else if(keyPress === 'down' && this.y < 410){
    this.y += 85;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

//position of the enemies
var enemyPosition = [85, 120, 215];
var player = new Player(200, 300);
var enemy;

enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 228));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

