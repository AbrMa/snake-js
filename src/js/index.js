import {
  snakeSpeed,
  update as updateSnake,
  render as renderSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, render as renderFood } from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameover = false;

const main = (currentTime) => {
  if (gameover) {
    if (confirm('You lost, press ok to restart')){
      window.location.reload();
    }
    return
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / snakeSpeed) {
    return;
  }

  update();
  render();
  lastRenderTime = currentTime;
};

window.requestAnimationFrame(main);

const checkDeath = () => {
  gameover = outsideGrid(getSnakeHead()) || snakeIntersection();
};

const update = () => {
  updateSnake();
  updateFood();
  checkDeath();
};

const render = () => {
  gameBoard.innerHTML = "";
  renderSnake(gameBoard);
  renderFood(gameBoard);
};
