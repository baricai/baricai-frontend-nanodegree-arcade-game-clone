// Enemies our player must avoid
var Enemy = function(x, y, movement) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.movement = movement;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.movement * dt;

    // resets position of enemy to move from left to right when player reaches destination
    if (this.x > 500) {
      this.x = -150;
      this.movement = 150 + Math.floor(Math.random() * 500);
    }

    // below code will check for any collisions between player and enemy
    if (player.x < this.x + 60 &&
      player.x + 37 > this.x &&
      player.y < this.y + 25 &&
      30 + player.y > this.y) {
      player.x = 200; // re-aligns position.1
      player.y = 400; // re-aligns position.2
    }
  };
  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, movement) {
    this.x = x;
    this.y = y;
    this.movement = movement;
    this.sprite = 'images/char-boy.png';
  }
  Player.prototype.update = function() {
    
    if (this.y > 360) {
      this.y = 360;
    }

    if (this.x > 420) {
      this.x = 420;
    }

    if (this.x < 0) {
      this.x = 0;
    }
  };

  Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  
  Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
      case 'left':
        this.x -= this.movement + 40;
        break;
      case 'up':
        this.y -= this.movement + 20;
        break;
      case 'right':
        this.x += this.movement + 40;
        break;
      case 'down':
        this.y += this.movement + 20;
        break;
    }
  };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

// Position the enemies
var enemyPosition = [40, 130, 220];
var player = new Player(200, 400, 50);
var enemy;

enemyPosition.forEach(function (posY) {
  enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 505));
  allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
