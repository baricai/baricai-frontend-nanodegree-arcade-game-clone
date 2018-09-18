frontend-nanodegree-arcade-game
===============================
https://baricai.github.io/baricai-frontend-nanodegree-arcade-game-clone/

Variables are set for enemies (the bugs) and the player, it uses a 2 dimensional table, which is x, ,y followed by the movement of each.

The bugs have random speed everytime the game refreshes and they fadeaway as soon as they approach the end of the canvas moving in only left-right direction.

The player upon decisiion of what type of image to pick for the player has the ability to move up, down, left, right within the center of each square, this is done with the cursor commands in the keyboard, the speed is the same for every click.

The goal is to to keep clicking in any of those four directions to avoid being hit by the bugs, if any of the bugs hits the player, it restarts from the bottom, if the player avoids all bugs and gets to the top he/she wins,  then resets the player back into a new game from the bottom.

The keyword "this" is used for both the player and the enemies within the class and class prototype functions to refer to the object the function is called upon.



For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
