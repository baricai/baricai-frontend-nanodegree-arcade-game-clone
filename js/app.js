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
    if (this.x > 560) {
      this.x = -120;
      this.movement = 125 + Math.floor(Math.random() * 505);
    }

    // below code will check for any collisions between player and enemy
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
      player.x = 250; 
      player.y = 350; 
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
  update() {
    if (this.y > 360) {
      this.y = 360;
    }

    if (this.x > 410) {
      this.x = 410;
    }

    if (this.x < 0) {
      this.x = 0;
    }
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  // use arrow keys around
  handleInput(keyPress) {
    switch (keyPress) {
      case 'left':
        this.x -= this.movement + 65;
        break;
      case 'up':
        this.y -= this.movement + 35;
        break;
      case 'right':
        this.x += this.movement + 65;
        break;
      case 'down':
        this.y += this.movement + 35;
        break;
    }
  };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var enemyPosition = [70, 150, 225];
var player = new Player(250, 350, 65);
var enemy;

enemyPosition.forEach(function (posY) {
  enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 499));
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
