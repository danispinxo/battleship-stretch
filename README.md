# Battleship Stretch Project

This Battleship-style game is a full stack web application built with Express that pits a player against an automatic algoritm working to locate and sink each other's fleet of ships. It was produced as a part of the Lighthouse Labs Stretch activities in the Web Development Full-Time Bootcamp. The app is quite incomplete--let's call it a work in progress--but I wanted to submitted to show my work up until this point. 

## Screenshots

!["The Ship Placement Module"](https://github.com/danispinxo/battleship-stretch/blob/master/public/images/ship-placement.png)
!["Player Boards with the Ships Placed"](https://github.com/danispinxo/battleship-stretch/blob/master/public/images/boards.png)
!["Attacks with Console Logs"](https://github.com/danispinxo/battleship-stretch/blob/master/public/images/attacks-with-console.png)

## Dependencies

- Node.js
- Express
- Nodemon

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm run local` command.

## Features

### Customized Placement
You can customize where you put your ships, either vertical or horizontal. You will receive an error message if you try to put two ships on the same block, or if your ship sizes are not correct.

### Automatic Turns
You are prompted to attack your opponent. You either "Hit" or "Miss" in the console, and the square turns to an X for a hit or a O for a miss. Right after your turn, the computer attacks you with similar changes to your own squares. 

### HORRIBLY ONE-SIDED!
You have a brain. The computer is currently a very basic algorithm that simply chooses its guess from the remaining un-guessed squares, making it a poor player. Some might view this as a bug or a problem with the app. I'd like us to think about this as a delightful feature that almost certainly guarantees the player the win. Hurray! Take THAT computers. 

## Known Bugs

### Hit/Miss Messages
At this time, the only "Hit" and "Miss" messages are in the console. As I continue to work on this project, I will move these messages into the browser as both alerts and part of a game log. 

### No Actual Sinking of Ships
At this time, the app does not differentiate occupied squares. So, there's no way of knowing which ships have been sunk. As I continue to work on this project, I will make this differentiation possible on the back-end, if perhaps not on the front-end until official sinking. 

### No Actual Winning the Game
At this time, the game just kind of ends. It will need a "Win" or "Lose" notification and the ability to reset the game in future development. 

### No Log of Turns Except the Console
While the console does indeed log the player's turns and the opponent turns (as well as the remaining player squares), there will eventually be a log of the turns in the browser. 

### Random Computer = Bad Player
Once again, this computer opponent is completely random and needs to be developed in order to make more intelligent decisions with its guesses. 

## Future Development

### Design & SASS
I would like to spend a bit more time on design and implement SASS here. But, I am quite happy with the overall girly look and feel of the game so far. 

### Leaderboard Function
I would like to develop a leaderboard function where after a game, the player would be prompted to input their name. This would involve calculating a score based on the number of turns taken to beat the computer. 

## Thank Yous

Just want to say a quick thank you to the mentors at LHL who helped answer questions and do code review for this project -- especially Ian and Mike who helped even though we're not technically supposed to use mentor help for these stretch projects. 
