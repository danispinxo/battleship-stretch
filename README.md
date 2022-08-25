# Battleship Stretch Project

This Battleship-style game is a full stack web application built with Express that pits a player against an automatic algoritm working to locate and sink each other's fleet of ships. It was produced as a part of the Lighthouse Labs Stretch activities in the Web Development Full-Time Bootcamp. The app is quite incomplete--let's call it a work in progress--but I wanted to submitted to show my work up until this point. 

## Screenshots

!["The Login Page"](https://github.com/danispinxo/tinyapp/blob/master/images/SS-login.png)

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
You have a brain. The computer is currently a very basic algoritm that simply chooses its guess from the remaining un-guessed squares, making it a poor player. Some might view this as a bug or a problem with the app. I'd like us to think about this as a delightful feature that almost certainly guarantees the player the win. Hurray! Take THAT computers. 

## Known Bugs

### Hit/Miss Messages

### No Actual Sinking of Ships

### No Actual Winning the Game

### No Log of Turns Except the Console

## Thank Yous

Just want to say a quick thank you to the mentors at LHL who helped answer questions and do code review for this project -- especially Ian and Mike who helped even though we're not technically supposed to use mentor help for these stretch projects. 