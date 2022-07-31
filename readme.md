## https://kata-log.rocks/bowling-game-kata

## Bowling Rules
The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two rolls. The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first roll. The frame is then completed with a single roll. The bonus for that frame is the value of the next two rolls.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

## Requirements
Write a class Game that has two methods

void roll(int) is called each time the player rolls a ball. The argument is the number of pins knocked down.

int score() returns the total score for that game.


## french
Le jeu se compose de 10 images. Dans chaque cadre, le joueur a deux lancers pour faire tomber 10 quilles. Le score pour le cadre est le nombre total de quilles renversées, plus les bonus pour les grèves et les pièces de rechange.

Une réserve est lorsque le joueur fait tomber les 10 quilles en deux rouleaux. Le bonus pour ce cadre est le nombre de quilles renversées par le prochain lancer.

Une grève est lorsque le joueur fait tomber les 10 quilles lors de son premier lancer. Le cadre est ensuite complété par un seul rouleau. Le bonus pour ce cadre est la valeur des deux lancers suivants.

Dans le dixième cadre, un joueur qui lance une réserve ou une grève est autorisé à lancer les balles supplémentaires pour compléter le cadre. Cependant, pas plus de trois balles peuvent être lancées dans le dixième cadre.