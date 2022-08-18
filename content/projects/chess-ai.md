---
title: Chess AI Project
type: page
---

GitHub: [ben9583/chess-ai](https://github.com/ben9583/chess-ai)

*An AI that plays chess and is hopefully better than me*

![output](https://user-images.githubusercontent.com/16968917/158918810-5410796e-3c9b-49b9-a39d-513fe9392891.gif)
*GIF demonstrating human play, AI is not complete yet (see below)*

Written in Java 17 using the Maven project management tool. Currently, the chess program itself is complete, though testing still needs to be done and then I'll start work on the AI.

## About

This project implements a chess game that can be played by two humans, two AIs, or humans vs. AI. Furthermore, the game can also be played in a 'headless' state by using the command line to enter in moves if there is a human in the game (otherwise the game will run to completion). 

There are currently 3 different AIs created for this game: `RandomAgent`, `GreedyAgent`, and `NeuralAgent`: 
- `RandomAgent` works by simply picking a random, legal move and it performs as poorly as you'd expect. 
- `GreedyAgent` picks the move that gets it the most points by capturing a piece, assuming it's legal and randomly chooses between ties. Although usually beating `RandomAgent` in AI vs. AI games, it only looks one move into the future and doesn't understand the concept of a protected piece, so will happily sack its queen for a pawn. 
- `NeuralAgent` feeds in the board as a 3-dimensional input (height, width, one-hot encoded piece) through a Convolutional Neural Network (CNN) and outputs the scalar evaluation of the position. It does this evaluation for every possible position it can reach given a legal move and picks the move with the highest evaluation. However, I haven't trained the network yet, so when running the program it runs about as good as random.

To play the game with graphics enabled (not headless), use the `--graphics` flag. To change the humans/AIs playing the game, currently you will have to change that in `ChessGame.java`.

## Build process

```sh
git clone https://github.com/ben9583/chess-ai.git chess-ai && cd chess-ai
mvn build
```
